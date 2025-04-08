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
      variants={scaleAnime}
      transition={{ duration: 0.5 }}
      className="bg-card px-3 py-2 rounded-xl aspect-video">
      {/* Recent Transactions Element */}
      {/* Loading Tansactions */}
      {transactionsList === null && <div>Loading transactions...</div>}
      {/* No Accounts for User */}
      {transactionsList?.length === 0 &&
        <div>No transactions exist for {user?.first_name + ' ' + user?.last_name} in the last two weeks</div>
      }
      {/* Display Accounts for User */}
      {hasTransactions && (
        <div className="flex flex-col gap-2">
          {transactionsList.map((transaction) => (
            <div key={transaction.id}>{transaction.date} - {transaction.payee} - {transaction.amount}</div>
          ))}
        </div>
      )}
      {/* Recent Transactions Element */}
    </motion.div>
  )
}

export default RecentTransactions
