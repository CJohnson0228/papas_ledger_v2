export interface Entry {
  id: number // int8 (bigint) in Supabase is a number
  account_id: number // Foreign key linking to `accounts.id`
  payee: string
  category?: string | null // Nullable
  debit: boolean // True = Debit, False = Credit
  amount: number // float8 type is stored as a number
  date: string // Supabase `date` type is stored as an ISO 8601 string
  reconciled: boolean // Default is false
}
