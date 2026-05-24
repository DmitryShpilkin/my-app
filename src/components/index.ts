/**
 * Реэкспорт компонентов для удобства импорта.
 *
 * Этот файл служит единой точкой входа (barrel) для всех компонентов в папке.
 * Он позволяет импортировать компоненты из других частей приложения,
 * используя более короткий и понятный путь.
 *
 * Например, вместо:
 * import RegistrationForm from './components/RegistrationForm';
 * import LoginForm from './components/LoginForm';
 *
 * Теперь можно писать:
 * import { RegistrationForm, LoginForm } from 'components';
 */
export { default as RegistrationForm } from './RegistrationForm';
export { default as LoginForm } from './LoginForm';