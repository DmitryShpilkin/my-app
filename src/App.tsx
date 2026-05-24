// src/App.tsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Импортируем наш хедер
import RegistrationForm from './components/RegistrationForm';
import { LoginForm } from './components'; // Используем реэкспорт

// Простая заглушка для страницы логина
const LoginPage: React.FC = () => <div>Страница логина (заглушка)</div>;

function App() {
  return (
    // 1. ВСЁ содержимое оборачиваем в BrowserRouter
    <BrowserRouter> 
      {/* 2. Хедер теперь внутри роутера, чтобы <Link> работал */}
      <Header /> 
      
      {/* 3. Сами маршруты */}
      <Routes>
        <Route path="/register" element={<RegistrationForm 
          onSubmit={(data) => console.log('Данные отправлены:', data)} 
        />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Перенаправление на регистрацию при запуске */}
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;