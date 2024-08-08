import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import required and essential methods from 'react-router-dom' to setup routing in react application
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// Import stylesheet to support react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Import error to handle undefined routes
import Error from './pages/Error.jsx'

// Configure routing, so right component renders based on URL
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />
  }
]);

// Pass configured router instance to RouterProvider to wrap your application with routing capabilities
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
