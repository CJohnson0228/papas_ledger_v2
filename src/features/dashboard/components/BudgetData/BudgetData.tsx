import { scaleAnime } from "@/utils/animVariants"
import { motion } from "motion/react"
import { useEffect } from "react"

// will use a pie chart for this one with expenses by category
// maybe a pair of rings, inside being budget outter ring being actual.
function BudgetData() {

  // Budget Load
  useEffect(() => { }, [])

  return (
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
  )
}

export default BudgetData
