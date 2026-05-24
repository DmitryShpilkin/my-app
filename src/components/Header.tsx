import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Компонент навигационного хедера.
 * Содержит ссылки на страницы логина и регистрации.
 */
const Header: React.FC = () => {
  return (
    <nav>
      {/* Ссылка на страницу логина */}
      <Link to="/login">Login</Link> 
      
      {/* Ссылка на страницу регистрации */}
      <Link to="/register">Register</Link> 
    </nav>
  );
};

export default Header;