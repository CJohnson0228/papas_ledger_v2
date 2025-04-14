import { Button } from "@/components/ui/button"
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import userAtom from "@/features/auth/state/userAtom"
import { getBudgetItemsByUserId } from "@/features/budgeting/database/budgetServices"
import { BudgetDataItem } from "@/features/budgeting/types/BudgetDataTypes"
import { scaleAnime } from "@/utils/animVariants"
import { useAtomValue } from "jotai"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { Cell, LabelList, Pie, PieChart } from "recharts"
import PieLabel from "./components/PieLabel"
import { chartColors } from "./utils/chartColors"

const chartConfig = {} satisfies ChartConfig

function BudgetData() {
  const [budgetList, setBudgetList] = useState<BudgetDataItem[] | null>(null)
  const [actualList, setActualList] = useState<BudgetDataItem[] | null>(null)
  const hasBudget = budgetList !== null && budgetList.length > 0 && actualList !== null && actualList.length > 0
  const user = useAtomValue(userAtom)

  // Budget Load
  useEffect(() => {
    const retrieveBudget = async () => {
      if (user) {
        const budgetData = await getBudgetItemsByUserId(user?.uid)
        setBudgetList(budgetData)
        console.log('fetched budget: ', budgetData)
      }
    }
    retrieveBudget()
  }, [user])

  // Actual Load
  useEffect(() => {
    const retrieveActual = async () => {
      if (user) {
        // update with logic to pull transactions with categories
        setActualList(null)
        console.log('retrieve actual data here')
      }
    }
    retrieveActual()
  }, [user])

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={scaleAnime}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col items-center bg-card p-2 rounded-xl min-h-[260px]">
      <div>Budgeting</div>
      {/* Budget Data Element */}
      {/* Loading Budget Elements */}
      {budgetList === null && <div className='text-muted-foreground'>Loading Budget...</div>}
      {/* No Budget Elements for User */}
      {budgetList?.length === 0 &&
        <div className="flex flex-col justify-between w-full text-center grow-1">
          <div className='text-muted-foreground'>No Budget exists for {user?.first_name + ' ' + user?.last_name}</div>
          <Button variant='default' className="w-full">Add Budget</Button>
        </div>
      }
      {/* Has Budget Elements for User */}
      {hasBudget && (
        <ChartContainer config={chartConfig} className="flex-1">
          <PieChart width={200} height={200}>
            <Pie data={actualList} dataKey="value" cx='50%' cy='50%' outerRadius={50}>
              {budgetList.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chartColors[entry.category]} />
              ))}
            </Pie>
            <Pie data={budgetList} dataKey="value" cx='50%' cy='50%' innerRadius={60} outerRadius={80}>
              <LabelList
                dataKey="category"
                position="outside"
                content={({ index, viewBox }) =>
                  PieLabel({ index, viewBox, chartData: budgetList })
                }
              />
              {budgetList.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={chartColors[entry.category]} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      )}
      {/* Budget Data Element */}
    </motion.div>
  )
}

export default BudgetData
