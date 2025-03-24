import AuthPage from '@/features/auth/pages/AuthPage'
import Dashboard from '@/features/dashboard/Dashboard'
import Landing from '@/features/landing/Landing'
import NotFound from '@/pages/NotFound'
import { AnimatePresence } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router'

// App Routes
const AppRoutes = () => {
  const location = useLocation(); // Needed for route-based animations

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes