import AppRoutes from "@/routes";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import { getUserById } from "./database";
import userAtom, { userLoadingAtom } from "./features/auth/state/userAtom";
import supabase from "./lib/supabaseClient";
import LoadingPage from "./routes/LoadingPage";

// App Entry Point
const App = () => {
  const setUser = useSetAtom(userAtom);
  const [userLoading, setUserLoading] = useAtom(userLoadingAtom)

  useEffect(() => {
    const isMounted = true
    // Check for an existing session on app load
    const initAuth = async () => {
      setUserLoading(true)
      try {
        const { data: authData, error } = await supabase.auth.getSession()
        if (error) throw error
        if (authData?.session) {
          try {
            const user = await getUserById(authData.session.user.id);
            if (isMounted) setUser(user);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            console.error(error);
          }
        } else {
          if (isMounted) setUser(null)
        }
      } catch (error) {
        console.error(error);
      } finally {
        setUserLoading(false)
      }

      // Listen for auth state changes
      const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
        setUserLoading(true)
        if (session?.user) {
          try {
            const user = await getUserById(session.user.id);
            setUser(user);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            console.error(error);
          } finally {
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