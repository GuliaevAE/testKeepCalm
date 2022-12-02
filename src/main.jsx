import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import HeaderLayout from './components/header'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeaderLayout/>
    <App />
    <Footer/>
  </React.StrictMode>
)
