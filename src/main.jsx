import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './routes/router.jsx';
import AuthProviders from './providers/AuthProviders';
import { Toaster } from 'react-hot-toast';
import 'react-tooltip/dist/react-tooltip.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
    <Toaster />
  </React.StrictMode>,
)
