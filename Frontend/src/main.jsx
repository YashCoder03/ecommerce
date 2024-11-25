import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Component/LoginPage/login.jsx';
import Register from './Component/RegisterPage/register.jsx';
import Home from './Component/Home/Home.jsx';

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Wraps all the child routes
    children: [
      {
        path: '',
        element: <Home />, // Default route when path is '/'
      },
      {
        path: 'login',
        element: <Login />, // Route for Login page
      },
      {
        path: 'register',
        element: <Register />, // Route for Register page
      },
    ],
  },
]);

// Render the app with RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
