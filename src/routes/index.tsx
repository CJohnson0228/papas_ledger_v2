import Landing from '@/app/components/Landing'
import LoadingPage from '@/app/components/Loading/LoadingPage'
import AppLayout from '@/app/layouts/AppLayout'
import { userLoadingAtom } from '@/features/auth'
import AuthPage from '@/features/auth/pages/AuthPage'
import Dashboard from '@/features/dashboard/Dashboard'
import { useAtomValue } from 'jotai'
import { AnimatePresence } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router'
import NotFound from './NotFound'
import ProtectedRoute from './ProtectedRoute'

// App Routes
const AppRoutes = () => {
  const location = useLocation(); // Needed for route-based animations
  const loading = useAtomValue(userLoadingAtom)

  if (loading) { return <LoadingPage /> }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path='/' element={<Landing />} />
        <Route path='/auth' element={<AuthPage />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='accounts' element={<div>Account Layout</div>}>
              <Route path=':id' element={<div>Account</div>} />
            </Route>
            <Route path='budgets' element={<div>Budget Layout</div>}>
              <Route path=':id' element={<div>Budget</div>} />
            </Route>
            <Route path='charts' element={<div>Chart Layout</div>}>
              <Route path=':id' element={<div>Chart</div>} />
            </Route>
          </Route>
        </Route>

        {/* Catch-all*/}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes