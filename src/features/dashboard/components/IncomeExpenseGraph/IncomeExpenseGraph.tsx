import { scaleAnime } from "@/utils/animVariants"
import { motion } from "motion/react"
import { useEffect } from "react"

function IncomeExpenseGraph() {
  // Income/Expense Load
  useEffect(() => { }, [])
  return (
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
  )
}

export default IncomeExpenseGraph
