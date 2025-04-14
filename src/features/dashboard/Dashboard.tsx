import { fadeAnim } from "@/utils/animVariants"
import { motion } from "motion/react"
import AccountsList from "./components/AccountsList"
import BudgetData from "./components/BudgetData"
import IncomeExpenseGraph from "./components/IncomeExpenseGraph"
import RecentTransactions from "./components/RecentTransactions"

function Dashboard() {

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={fadeAnim}
      transition={{ duration: 0.5, delay: 0 }}>
      <div className="flex flex-col flex-1 gap-4 p-4">
        <AccountsList />
        <motion.div
          className="gap-4 grid md:grid-cols-3 auto-rows-min">
          <RecentTransactions />
          <IncomeExpenseGraph />
          <BudgetData />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Dashboard
