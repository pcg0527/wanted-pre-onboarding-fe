import React, { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  // 첫 렌더링시 localStorage에 유저 정보가 있는지 확인
  useEffect(() => {
    setIsAuthenticated(
      localStorage.getItem('email') && localStorage.getItem('password')
    );
  }, []);

  // 로그인시 인증 상태 업데이트
  const onLoginHandler = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      {/* 인증 상태에 따라 로그인, 메인 페이지 렌더링 */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <MainPage />
          ) : (
            <LoginPage onLogin={onLoginHandler} />
          )
        }
      />
    </Routes>
  );
}

export default App;
