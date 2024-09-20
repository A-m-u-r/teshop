/*
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'

export async function checkAuthAndRole<P extends ParsedUrlQuery>(
    context: GetServerSidePropsContext<P>,
    roles: string[] = [] // Передаем роли, которые имеют доступ
): Promise<GetServerSidePropsResult<P>> {
    const { req } = context;
    const token = req.cookies.token; // Предполагается, что токен хранится в куках

    if (!token) {
        return {
            redirect: {
                destination: '/login', // Редирект на страницу логина, если токен не найден
                permanent: false,
            },
        };
    }

    try {
        const user = await verifyToken(token); // Проверяем токен
        const role = 'auth'; // Получаем роль пользователя

        if (!roles.includes(role)) {
            return {
                notFound: true, // Если роль пользователя не соответствует требуемым, возвращаем 404
            };
        }

        return { props: {} }; // Если все проверки пройдены успешно, возвращаем пустые props
    } catch (error) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
}
*/