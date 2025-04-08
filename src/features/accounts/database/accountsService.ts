import supabase from '@/lib/supabaseClient'
import { Account } from '@/types/accountTypes'
import { Entry } from '@/types/entryTypes'

// Get all accounts associate with User by user_id
export const getAllAccountsByUserId = async (
  uid: string
): Promise<Account[] | null> => {
  const { data, error } = await supabase
    .from('accounts')
    .select('*')
    .eq('user_id', uid)
  if (error) throw error
  return data
}

export const getAccountEntriesByAccountId = async (
  accountId: string
): Promise<Entry | Entry[] | null> => {
  const { data, error } = await supabase
    .from('entries')
    .select('*')
    .eq('account_id', accountId)
  if (error) throw error
  return data
}

export const getRecentEntriesForUser = async (
  uid: string
): Promise<Entry[] | null> => {
  const timeframe = new Date()
  timeframe.setDate(timeframe.getDate() - 14)

  const { data: accounts, error: accountsError } = await supabase
    .from('accounts')
    .select('id')
    .eq('user_id', uid)

  if (accountsError || !accounts || accounts.length === 0) {
    console.error('Error fetching accounts: ', accountsError)
    return []
  }

  const accountIds = accounts?.map((acc) => acc.id)

  if (accountIds.length === 0) return []

  const { data: entries, error: entriesError } = await supabase
    .from('entries')
    .select('*')
    .in('account_id', accountIds)
    .gte('date', timeframe.toISOString())

  if (entriesError) {
    console.error('Error fetching entries: ', entriesError)
    return []
  }
  return entries
}
