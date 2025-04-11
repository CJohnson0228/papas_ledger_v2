import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { scaleAnime } from "@/utils/animVariants"
import { motion } from "motion/react"
import { useEffect } from "react"
import { Cell, LabelList, Pie, PieChart } from "recharts"
import PieLabel from "./components/PieLabel"

const chartDataBudget = [
  { category: 'Housing', value: 1325, color: 'oklch(0.75 0.22 20)' },
  { category: 'Transportation', value: 240, color: 'oklch(0.75 0.20 55)' },
  { category: 'Food', value: 640, color: 'oklch(0.75 0.18 95)' },
  { category: 'Utilities', value: 320, color: 'oklch(0.75 0.18 145)' },
  { category: 'Medical', value: 200, color: 'oklch(0.75 0.20 180)' },
  { category: 'Clothing', value: 100, color: 'oklch(0.75 0.20 220)' },
  { category: 'Insurance', value: 289, color: 'oklch(0.75 0.18 260)' },
  { category: 'Household', value: 200, color: 'oklch(0.75 0.18 280)' },
  { category: 'Personal', value: 240, color: 'oklch(0.75 0.20 310)' },
  { category: 'Debt', value: 70, color: 'oklch(0.75 0.20 340)' },
  { category: 'Retirement', value: 10, color: 'oklch(0.75 0.12 10)' },
  { category: 'Savings', value: 60, color: 'oklch(0.75 0.12 190)' },
  { category: 'Entertainment', value: 160, color: 'oklch(0.75 0.20 300)' },
]

const chartDataActual = [
  { category: 'Housing', value: 1325, color: 'oklch(0.75 0.22 20)' },
  { category: 'Transportation', value: 200, color: 'oklch(0.75 0.20 55)' },
  { category: 'Food', value: 528, color: 'oklch(0.75 0.18 95)' },
  { category: 'Utilities', value: 320, color: 'oklch(0.75 0.18 145)' },
  { category: 'Medical', value: 200, color: 'oklch(0.75 0.20 180)' },
  { category: 'Clothing', value: 100, color: 'oklch(0.75 0.20 220)' },
  { category: 'Insurance', value: 289, color: 'oklch(0.75 0.18 260)' },
  { category: 'Household', value: 200, color: 'oklch(0.75 0.18 280)' },
  { category: 'Personal', value: 180, color: 'oklch(0.75 0.20 310)' },
  { category: 'Debt', value: 85, color: 'oklch(0.75 0.20 340)' },
  { category: 'Retirement', value: 0, color: 'oklch(0.75 0.12 10)' },
  { category: 'Savings', value: 40, color: 'oklch(0.75 0.12 190)' },
  { category: 'Entertainment', value: 160, color: 'oklch(0.75 0.20 300)' },
]

const chartConfig = {} satisfies ChartConfig

function BudgetData() {

  // Budget Load
  useEffect(() => { }, [])

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={scaleAnime}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col justify-center items-center bg-card p-2 rounded-xl min-h-[260px]">
      {/* Budget Data Element */}
      <div>Budgeting</div>
      <ChartContainer config={chartConfig} className="flex-1">
        <PieChart width={200} height={200}>
          <Pie data={chartDataBudget} dataKey="value" cx='50%' cy='50%' outerRadius={50}>
            {chartDataBudget.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Pie data={chartDataActual} dataKey="value" cx='50%' cy='50%' innerRadius={60} outerRadius={80}>
            <LabelList
              dataKey="category"
              position="outside"
              content={({ index, viewBox }) =>
                PieLabel({ index, viewBox, chartData: chartDataBudget })
              }
            />
            {chartDataActual.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
      {/* Budget Data Element */}
    </motion.div>
  )
}

export default BudgetData
