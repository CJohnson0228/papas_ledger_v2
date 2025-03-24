import supabase from '@/lib/supabaseClient'
import { Entry } from '@/types/entryTypes'

// Get all entries for a specific account
export const getEntriesByAccount = async (
  account_id: number
): Promise<Entry[]> => {
  const { data, error } = await supabase
    .from('entries')
    .select('*')
    .eq('account_id', account_id)
  if (error) throw error
  return data
}

// Get a single entry by ID
export const getEntryById = async (id: number): Promise<Entry | null> => {
  const { data, error } = await supabase
    .from('entries')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

// Create a new entry (Exclude `id` since it's auto-generated)
export const createEntry = async (entryData: Omit<Entry, 'id'>) => {
  const { data, error } = await supabase
    .from('entries')
    .insert([entryData])
    .select()
    .single()
  if (error) throw error
  return data
}

// Update an entry (Exclude `id` from updates)
export const updateEntry = async (
  id: number,
  updatedData: Partial<Omit<Entry, 'id'>>
) => {
  const { data, error } = await supabase
    .from('entries')
    .update(updatedData)
    .eq('id', id)
  if (error) throw error
  return data
}

// Delete an entry
export const deleteEntry = async (id: number) => {
  const { error } = await supabase.from('entries').delete().eq('id', id)
  if (error) throw error
}
