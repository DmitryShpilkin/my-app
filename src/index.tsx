// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // Для React 18+
import App from './App'; // Импортируем наш главный компонент
import './index.css'; // Стили

// Находим "корень" в файле public/index.html (это <div id="root"></div>)
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!); // Создаем корень

// Отрисовываем компонент <App /> внутри корня
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);