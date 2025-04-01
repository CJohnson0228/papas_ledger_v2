import Landing from '@/features/app/components/Landing'
import Dashboard from '@/features/app/Dashboard'
import AuthPage from '@/features/auth/pages/AuthPage'
import NotFound from '@/pages/NotFound'
import { AnimatePresence } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router'
import ProtectedRoute from './ProtectedRoute'

// App Routes
const AppRoutes = () => {
  const location = useLocation(); // Needed for route-based animations

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<AuthPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        {/* Catch-all*/}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes