// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Garante que o CSS compilado (Tailwind) seja carregado
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)