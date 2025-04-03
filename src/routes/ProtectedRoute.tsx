import userAtom from '@/features/auth/state/userAtom';
import { useAtomValue } from "jotai";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const user = useAtomValue(userAtom); // Get auth state
  return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;