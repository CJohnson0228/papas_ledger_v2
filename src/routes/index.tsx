import Dashboard from '@/features/app/components/Dashboard'
import Landing from '@/features/app/components/Landing'
import AuthPage from '@/features/auth/pages/AuthPage'
import { AnimatePresence } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router'
import NotFound from './NotFound'
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