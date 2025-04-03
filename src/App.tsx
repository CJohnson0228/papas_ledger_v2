import AppRoutes from "@/routes";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { getUserById } from "./database";
import userAtom from "./features/auth/state/userAtom";
import supabase from "./lib/supabaseClient";

// App Entry Point
const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useAtom(userAtom);
  const location = useLocation()

  useEffect(() => {
    // Check for an existing session on app load
    const initAuth = async () => {
      const { data: authData, error } = await supabase.auth.getSession()
      if (authData?.session) {
        try {
          const user = await getUserById(authData.session.user.id);
          console.log(user)
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
            console.log(user)
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

  // this accomplishes what I wanted it too, but Im not sure its the best way to do it.
  // The intent is to skip the auth window if there is already a user and session
  // Oringinally had a check that navigated to '/auth' if no user and to '/dashboard' if there was a user
  // that prevented a logged in user from viewing any page other than dashboard.
  // will continue to work on this.

  // this is breaking animations

  useEffect(() => {
    if (location.pathname === '/auth' && user) {
      navigate('dashboard')
    }
  }, [user, location])

  return <AppRoutes />
};

export default App;