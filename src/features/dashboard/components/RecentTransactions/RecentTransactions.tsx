import { getRecentEntriesForUser } from '@/features/accounts/database/accountsService'
import userAtom from '@/features/auth/state/userAtom'
import { Entry } from '@/types/entryTypes'
import { scaleAnime } from '@/utils/animVariants'
import { useAtomValue } from 'jotai'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

function RecentTransactions() {
  const [transactionsList, setTransactionsList] = useState<Entry[] | null>(null)
  const hasTransactions = transactionsList !== null && transactionsList.length > 0
  const user = useAtomValue(userAtom)

  // Recent Transactions Load
  useEffect(() => {
    const retrieveRecentTransactions = async () => {
      if (user) {
        const transactionsData = await getRecentEntriesForUser(user?.uid)
        setTransactionsList(transactionsData)
        console.log('fetched transactions: ', transactionsData)
      }
    }
    retrieveRecentTransactions()
  }, [user])

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={scaleAnime}
      transition={{ duration: 0.5 }}
      className="bg-card p-2 rounded-xl min-h-24 md:min-h-[260px]">
      <div className='text-center'>Recent Transactions</div>
      {/* Recent Transactions Element */}
      {/* Loading Tansactions */}
      {transactionsList === null && <div className='text-muted-foreground'>Loading transactions...</div>}
      {/* No Transactions for User */}
      {transactionsList?.length === 0 &&
        <div className='text-muted-foreground text-center'>No transactions exist for {user?.first_name + ' ' + user?.last_name} in the last two weeks</div>
      }
      {/* Display Transactions for User */}
      {hasTransactions && (
        <div className="flex flex-col gap-2">
          {/* Need to add Scroll Area Here */}
          {transactionsList.map((transaction) => (
            <div key={transaction.id} className='text-muted-foreground'>{transaction.date} - {transaction.payee} - {transaction.amount}</div>
          ))}
        </div>
      )}
      {/* Recent Transactions Element */}
    </motion.div>
  )
}

export default RecentTransactions
