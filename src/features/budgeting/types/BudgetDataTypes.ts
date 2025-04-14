export interface BudgetDataItem {
  category:
    | 'medical'
    | 'utilities'
    | 'food'
    | 'transportation'
    | 'clothing'
    | 'education'
    | 'housing'
    | 'insurance'
    | 'household'
    | 'personal'
    | 'savings'
    | 'donations'
    | 'entertainment'
  value: number
}
