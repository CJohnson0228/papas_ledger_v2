import supabase from '@/lib/supabaseClient'
import { BudgetDataItem } from '../types/BudgetDataTypes'

export const getBudgetItemsByUserId = async (
  uid: string
): Promise<BudgetDataItem[] | null> => {
  const { data, error } = await supabase
    .from('budgetEntries')
    .select('*')
    .eq('user_id', uid)
  if (error) throw error
  return data
}
