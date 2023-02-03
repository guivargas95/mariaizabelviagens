import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './reset.css'
import GalleryPage from './pages/Gallery'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="galeria" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)