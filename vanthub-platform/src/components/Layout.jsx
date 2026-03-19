import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Layout() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
