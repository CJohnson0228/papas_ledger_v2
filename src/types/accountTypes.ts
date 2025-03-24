export interface Account {
  id: number // int8 (bigint) in Supabase is a number
  user_id: string // Foreign key linking to `users.uid`
  name: string
  opening_date: string // Supabase `date` type is stored as an ISO 8601 string
  opening_balance: number // float4 type is stored as a number
}
