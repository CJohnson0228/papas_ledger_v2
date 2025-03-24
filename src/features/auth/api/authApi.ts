import supabase from '@/lib/supabaseClient'

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data.user
}

export const signUp = async (
  email: string,
  password: string,
  first_name: string,
  last_name: string
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { first_name, last_name },
    },
  })
  if (error) throw error
  return data.user
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
  return
}
