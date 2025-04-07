import { scaleAnime } from "@/utils/animVariants"
import { motion } from "motion/react"

function Dashboard() {

  return (
    <motion.div>
      <div className="flex flex-col flex-1 gap-4 p-4">
        <motion.div
          className="gap-4 grid md:grid-cols-3 auto-rows-min">
          <motion.div
            initial='hidden'
            animate='visible'
            variants={scaleAnime}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center bg-card rounded-xl aspect-video">
            {/* Recent Transactions Element */}
            Recent Transactions
            {/* Recent Transactions Element */}
          </motion.div>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={scaleAnime}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center bg-card rounded-xl aspect-video">
            {/* Income/Expense Graph Element */}
            Income/Expense Graph
            {/* Income/Expense Graph Element */}
          </motion.div>
          <motion.div
            initial='hidden'
            animate='visible'
            variants={scaleAnime}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center items-center bg-card rounded-xl aspect-video">
            {/* Budget Data Element */}
            Budget Data
            {/* Budget Data Element */}
          </motion.div>
        </motion.div>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={scaleAnime}
          transition={{ duration: 0.5, delay: 0 }}
          className="flex flex-1 justify-center items-center bg-card rounded-xl min-h-[100vh]">
          Accounts List
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Dashboard
