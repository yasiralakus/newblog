import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import FootballNews from './Pages/FootballNews.jsx'
import BasketballNews from './Pages/BasketballNews.jsx'
import FormulaNews from './Pages/FormulaNews.jsx'
import UfcNews from './Pages/UfcNews.jsx'
import Post from './Pages/Post.jsx'
import Register from './Pages/Register.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path :'/futbol',
                element: <FootballNews />
            },
            {
                path: '/basketbol',
                element: <BasketballNews />
            },
            {
                path: '/formula1',
                element: <FormulaNews />
            },
            {
                path: '/ufc',
                element: <UfcNews />
            },
            {
                path: '/post',
                element: <Post />
            },
            {
                path: '/kayit-ol',
                element: <Register />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
