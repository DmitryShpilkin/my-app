/**
 * API-заглушка для регистрации пользователя.
 * В реальном приложении здесь был бы запрос к серверу (например, через Axios).
 * Сейчас функция имитирует сетевой запрос и возвращает успешный ответ.
 *
 * @param data - Объект с данными пользователя для регистрации.
 * @returns Promise, который разрешается в объект Response.
 */
export async function registerUser(data: { login: string; email: string; password: string }): Promise<Response> {
// Имитация задержки сети (например, для отображения лоадера)
await new Promise(resolve => setTimeout(resolve, 500)); 

// Возвращаем объект, имитирующий успешный ответ сервера (статус 200)
return Promise.resolve(new Response(null, { status: 200 }));

// Примечание: В реальном fetch Response будет содержать json с токеном или ошибкой.
}