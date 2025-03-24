import AppRoutes from "@/routes";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import userAtom from "./features/auth/state/userAtom";
import supabase from "./lib/supabaseClient";
import { getUserById } from "./services";

// App Entry Point
const App = () => {
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for an existing session on app load
    const initAuth = async () => {
      const { data: authData, error } = await supabase.auth.getSession()
      if (authData?.session) {
        try {
          const user = await getUserById(authData.session.user.id);
          setUser(user);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          console.error(error);
        }
      }
      if (error) {
        console.error(error);
      }

      // Listen for auth state changes
      const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (session?.user) {
          try {
            const user = await getUserById(session.user.id);
            setUser(user);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            console.error(error);
          }
        } else {
          setUser(null);
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
  }, [setUser]);

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    } else {
      navigate('/')
    }
  }, [user, navigate])

  return <AppRoutes />;
};

export default App;