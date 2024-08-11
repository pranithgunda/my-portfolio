import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import required and essential methods from 'react-router-dom' to setup routing in react application
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Import stylesheet to support react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Import error to handle undefined routes
import Error from './pages/Error.jsx'
// import AboutMe, Portfolio, Contact and Resume Components
import AboutMe from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

// Configure routing, so right component renders based on URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path:'/portfolio',
        element:<Portfolio />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/resume',
        element:<Resume />
      }
    ]
  }
]);

// Pass configured router instance to RouterProvider to wrap your application with routing capabilities
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
