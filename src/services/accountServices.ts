import supabase from '@/lib/supabaseClient'
import { Account } from '@/types/accountTypes'

// Get all accounts for a specific user
export const getAccountsByUser = async (
  user_id: string
): Promise<Account[]> => {
  const { data, error } = await supabase
    .from('accounts')
    .select('*')
    .eq('user_id', user_id)
  if (error) throw error
  return data
}

// Get a single account by ID
export const getAccountById = async (id: number): Promise<Account | null> => {
  const { data, error } = await supabase
    .from('accounts')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

// Create a new account (Exclude `id` since it's auto-generated)
export const createAccount = async (accountData: Omit<Account, 'id'>) => {
  const { data, error } = await supabase
    .from('accounts')
    .insert([accountData])
    .select()
    .single()
  if (error) throw error
  return data
}

// Update account details (Exclude `id` from updates)
export const updateAccount = async (
  id: number,
  updatedData: Partial<Omit<Account, 'id'>>
) => {
  const { data, error } = await supabase
    .from('accounts')
    .update(updatedData)
    .eq('id', id)
  if (error) throw error
  return data
}

// Delete an account
export const deleteAccount = async (id: number) => {
  const { error } = await supabase.from('accounts').delete().eq('id', id)
  if (error) throw error
}
