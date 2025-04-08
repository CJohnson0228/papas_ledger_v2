import userAtom, { userLoadingAtom } from '@/features/auth/state/userAtom';
import LoadingPage from '@/routes/LoadingPage';
import { useAtomValue } from "jotai";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const user = useAtomValue(userAtom); // Get auth state
  const userLoading = useAtomValue(userLoadingAtom)

  if (userLoading) {
    return <LoadingPage />
  }

  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;