import supabase from '@/lib/supabaseClient'

// Supabase SignUp
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  if (error) throw error
  return data
}

// Supabase SignIn
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data
}

// Supabase SignOut
export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

// Supabase getUser
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser()
  if (error) throw error
  return data?.user || null
}
