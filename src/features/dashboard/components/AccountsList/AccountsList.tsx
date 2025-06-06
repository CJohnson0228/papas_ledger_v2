import { Button } from "@/components/ui/button"
import { getAllAccountsByUserId } from "@/features/accounts/database/accountsService"
import userAtom from "@/features/auth/state/userAtom"
import { Account } from "@/types/accountTypes"
import { scaleAnime } from "@/utils/animVariants"
import { useAtomValue } from "jotai"
import { motion } from "motion/react"
import { useEffect, useState } from "react"

function AccountsList() {
  const [accountsList, setAccountsList] = useState<Account[] | null>(null)
  const hasAccounts = accountsList !== null && accountsList.length > 0
  const user = useAtomValue(userAtom)

  // Accounts Load
  useEffect(() => {
    const retrieveAccounts = async () => {
      if (user) {
        const accountData = await getAllAccountsByUserId(user?.uid)
        setAccountsList(accountData)
        console.log('fetched accounts: ', accountData)
      }
    }
    retrieveAccounts()
  }, [user])

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={scaleAnime}
      transition={{ duration: 0.5, delay: 0 }}
      className="flex flex-col flex-1 items-center bg-card p-2 rounded-xl min-h-24">
      <div className="text">Accounts</div>
      {/* Loading Accounts */}
      {accountsList === null && <div className='text-muted-foreground'>Loading accounts...</div>}
      {/* No Accounts for User */}
      {accountsList?.length === 0 &&
        <div className="w-full text-center">
          <div className='pb-2 text-muted-foreground'>No accounts exist for {user?.first_name + ' ' + user?.last_name}</div>
          <Button variant='default' className="w-full">Add Account</Button>
        </div>}
      {/* Display Accounts for User */}
      {hasAccounts && (
        <div className="flex flex-col gap-2">
          {accountsList.map((account) => (
            <div className='text-muted-foreground' key={account.id}>{account.name}</div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default AccountsList
