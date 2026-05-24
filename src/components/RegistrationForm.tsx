import React, { useState } from 'react'; 
import SimpleReactValidator from 'simple-react-validator';

/**
 * Компонент формы регистрации.
 * Использует библиотеку simple-react-validator для валидации полей.
 * При успешной отправке вызывает колбэк onSubmit и отображает сообщение об успехе.
 */

// Определяем тип для props, которые компонент ожидает получить извне
interface RegistrationFormProps {
  // Функция, которую вызовет компонент при успешной отправке
  onSubmit: (data: { login: string; email: string; password: string }) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  // Состояние для полей формы
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Состояние для показа сообщения об успехе
  const [submitted, setSubmitted] = useState(false);

  // Инициализируем валидатор. useState нужен, чтобы экземпляр создавался один раз.
  const [validator] = useState(new SimpleReactValidator());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Проверяем все поля на валидность
    if (validator.allValid()) {
      onSubmit({ login, email, password }); // Вызываем функцию из props
      setSubmitted(true); // Показываем сообщение об успехе
    } else {
      // Если есть ошибки — показываем сообщения под полями
      validator.showMessages();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Блок поля LOGIN */}
      <div>
        {/* htmlFor связывает метку с полем ввода для доступности и тестов */}
        <label htmlFor="login-input">Login</label>
        <input
          id="login-input" // ID должен соответствовать htmlFor
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          onBlur={() => validator.showMessageFor('login')}
        />
        {/* Метод message() отрисовывает сообщение об ошибке, если поле не проходит валидацию. */}
        {validator.message('login', login, 'required')}
      </div>

      {/* Блок поля EMAIL */}
      <div>
        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validator.showMessageFor('email')}
        />
        {validator.message('email', email, 'required|email')}
      </div>

      {/* Блок поля PASSWORD */}
      <div>
        <label htmlFor="password-input">Password</label>
        <input
          id="password-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validator.showMessageFor('password')}
        />
        {validator.message('password', password, 'required|min:8')}
      </div>

      {/* Кнопка отправки формы. Отключена, если валидатор находит ошибки. */}
      <button type="submit" disabled={!validator.allValid()}>
        Register
      </button>

      {/* Условный рендеринг: сообщение об успехе показывается только после отправки. */}
      {submitted && <p>Registration Successful!</p>}
    </form>
  );
};

export default RegistrationForm;