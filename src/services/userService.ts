import supabase from '@/lib/supabaseClient'
import { User } from '@/types/userTypes'

// Get user by UID
export const getUserById = async (uid: string): Promise<User | null> => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('uid', uid)
    .single()
  if (error) throw error
  return data
}

// Create a new user (Exclude `created_at` from inserts)
export const createUser = async (
  userData: Omit<User, 'uid' | 'created_at'>
) => {
  const { data, error } = await supabase.from('users').insert([userData])
  if (error) throw error
  return data
}

// Update user info (Exclude `created_at` from updates)
export const updateUser = async (
  uid: string,
  updatedData: Partial<Omit<User, 'created_at'>>
) => {
  const { data, error } = await supabase
    .from('users')
    .update(updatedData)
    .eq('uid', uid)
  if (error) throw error
  return data
}
