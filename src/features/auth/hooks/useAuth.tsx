import { createUser, getUserById } from '@/database'
import { useSetAtom } from 'jotai'
import { useState } from "react"
import { signIn, signOut, signUp } from '../api/authApi'
import userAtom from "../state/userAtom"

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const setUser = useSetAtom(userAtom)

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    // Login user in SUpabase Auth
    try {
      const authUser = await signIn(email, password)
      if (!authUser) throw new Error("User registration failed");
      // Authenticate user
      const user = await getUserById(authUser.id)
      if (!user) throw new Error('User not found')
      setUser(user)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (email: string, password: string, first_name: string, last_name: string) => {
    setIsLoading(true)
    setError(null)
    // Register user in Supabase Auth
    try {
      const authUser = await signUp(email, password, first_name, last_name);
      if (!authUser) throw new Error("User registration failed");

      // Store user in `users` table
      const user = await createUser({
        uid: authUser.id,
        email,
        first_name,
        last_name,
      });
      if (!user) throw new Error('User not create')
      setUser(user);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const logOut = async () => {
    setIsLoading(true)
    setError(null)
    // supabase Logout function
    try {
      await signOut()
      // assign Null to userAtom
      setUser(null)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    error,
    login,
    register,
    logOut,
  }
}
