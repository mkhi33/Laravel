import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout';
import Layout from './layouts/Layout';
import Inicio from './views/Inicio';
import Login from './views/Login';
const router = createBrowserRouter([
    { 
        path:'/',
        element: <Layout />, 
        children: [
            {index: true, element: <Inicio />},
        ] 
    },
    {
        path:'/auth',
        element: <AuthLayout />,
        children: [
            {index: true, element: <Login />},
        ]
    },
])

export default router;