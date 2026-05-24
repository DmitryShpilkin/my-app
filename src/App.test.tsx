// src/App.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// Теперь у нас будет один простой тест, который просто проверяет,
// что компонент App рендерится без ошибок.
test('renders App component without crashing', () => {
  render(<App />);
});