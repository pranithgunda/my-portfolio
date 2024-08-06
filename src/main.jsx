import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import required and essential methods from 'react-router-dom' to setup routing in react application
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

// Configure routing, so right component renders based on URL
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  }
]);

// Pass configured router instance to RouterProvider to wrap your application with routing capabilities
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
