import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HeaderLayout from './layouts/header'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderLayout/>
    <App />
  </React.StrictMode>
)
