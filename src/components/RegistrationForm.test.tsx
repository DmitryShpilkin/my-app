import { render, screen, fireEvent } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

/**
 * Основной блок тестов для компонента RegistrationForm.
 * Описывает сценарии использования формы: рендер, валидация и отправка данных.
 */
describe('RegistrationForm', () => {

  /**
   * Тест 1: Проверка визуального соответствия (Snapshot).
   * Этот тест делает "снимок" HTML-структуры компонента.
   * Если в будущем верстка изменится, тест упадет, сигнализируя о неучтенных изменениях.
   */
  test('renders correctly and matches snapshot', () => {
    // Рендерим компонент с заглушкой для функции onSubmit
    const { asFragment } = render(<RegistrationForm onSubmit={jest.fn()} />);
    // Сравниваем текущую верстку с сохраненным ранее "снимком"
    expect(asFragment()).toMatchSnapshot();
  });

  /**
   * Тест 2: Проверка логики валидации и состояния кнопки.
   * Мы проверяем, что кнопка "Register" изначально заблокирована,
   * и становится активной только после ввода валидных данных.
   */
  test('validates inputs and enables submit button when valid', () => {
    // Рендерим компонент для теста
    render(<RegistrationForm onSubmit={jest.fn()} />);

    // Получаем ссылки на элементы страницы
    const submitButton = screen.getByRole('button', { name: /register/i });
    const loginInput = screen.getByLabelText(/login/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    // Проверка 1: Кнопка должна быть отключена при первом рендере
    expect(submitButton).toBeDisabled();

    // Вводим данные в поля и симулируем потерю фокуса (onBlur)
    // Это заставляет валидатор проверить поля.
    fireEvent.change(loginInput, { target: { value: 'TestUser' } });
    fireEvent.blur(loginInput);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.blur(emailInput);

    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.blur(passwordInput);

    // Проверка 2: Кнопка должна стать активной после ввода валидных данных
    expect(submitButton).not.toBeDisabled();
  });
}); 