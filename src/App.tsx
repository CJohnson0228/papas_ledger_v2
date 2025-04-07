import AppRoutes from "@/routes";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import LoadingPage from "./app/components/Loading/LoadingPage";
import { getUserById } from "./database";
import userAtom, { userLoadingAtom } from "./features/auth/state/userAtom";
import supabase from "./lib/supabaseClient";

// App Entry Point
const App = () => {
  const setUser = useSetAtom(userAtom);
  const [userLoading, setUserLoading] = useAtom(userLoadingAtom)

  useEffect(() => {
    // Check for an existing session on app load
    const initAuth = async () => {
      setUserLoading(true)
      const { data: authData, error } = await supabase.auth.getSession()
      if (authData?.session) {
        try {
          const user = await getUserById(authData.session.user.id);
          setUser(user);
          setUserLoading(false)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          console.error(error);
          setUserLoading(false)
        }
      }
      if (error) {
        console.error(error);
        setUserLoading(false)
      }

      // Listen for auth state changes
      const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
        setUserLoading(true)
        if (session?.user) {
          try {
            const user = await getUserById(session.user.id);
            setUser(user);
            setUserLoading(false)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            console.error(error);
            setUserLoading(false)
          }
        } else {
          setUser(null);
          setUserLoading(false)
        }
      })

      // Cleanup on unmount
      return () => {
        authListener?.subscription?.unsubscribe();
      };
    }
    // Immediately invoke the async function
    const cleanup = initAuth();

    // Cleanup function for the effect (if cleanup is a function)
    return () => {
      cleanup.then((fn) => fn && fn());
    };
  }, [setUser, setUserLoading]);

  return userLoading ? (
    <LoadingPage />
  ) : (
    <AppRoutes />
  );
};

export default App;