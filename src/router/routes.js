export default [
    {
        path: '/login',
        name: 'login',
        meta: {
            secure: false,
        },
        component: () => import('@/views/Login')
    },
    {
        path: '/',
        name: 'home',
        alias: "*",
        meta: {
            secure: true,
        },
        component: () => import('@/views/Home')
    }
]
