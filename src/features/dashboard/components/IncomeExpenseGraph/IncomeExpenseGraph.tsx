import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { scaleAnime } from "@/utils/animVariants"
import { motion } from "motion/react"
import { useEffect } from "react"
import { Line, LineChart } from "recharts"

// this is demo data from shadcn chat website for proof of concept
const chartData = [
  { month: "January", income: 186, expense: 80 },
  { month: "February", income: 305, expense: 200 },
  { month: "March", income: 237, expense: 120 },
  { month: "April", income: 73, expense: 190 },
  { month: "May", income: 209, expense: 130 },
  { month: "June", income: 214, expense: 140 },
]

// this is demo data from shadcn chat website for proof of concept
const chartConfig = {
  income: {
    label: "Income",
    color: "var(--chart-2)",
  },
  expense: {
    label: "Expense",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

function IncomeExpenseGraph() {
  // Income/Expense Load
  useEffect(() => { }, [])
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={scaleAnime}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col justify-center items-center bg-card p-2 rounded-xl min-h-[260px]">
      <div>Income/Expenses</div>
      {/* Income/Expense Graph Element */}
      {/* this is demo data from shadcn chat website for proof of concept */}
      <ChartContainer config={chartConfig} className="flex-1 w-full">
        <LineChart accessibilityLayer data={chartData}>
          <Line dataKey="income" stroke="var(--color-income)" radius={4} />
          <Line dataKey="expense" stroke="var(--color-expense)" radius={4} />
        </LineChart>
      </ChartContainer>
      {/* this is demo data from shadcn chat website for proof of concept */}
      {/* Income/Expense Graph Element */}
    </motion.div>
  )
}

export default IncomeExpenseGraph
