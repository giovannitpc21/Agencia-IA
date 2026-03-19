import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Agentes from './pages/Agentes'
import Proceso from './pages/Proceso'
import Partners from './pages/Partners'
import Status from './pages/Status'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="agentes" element={<Agentes />} />
          <Route path="proceso" element={<Proceso />} />
          <Route path="partners" element={<Partners />} />
          <Route path="status" element={<Status />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
