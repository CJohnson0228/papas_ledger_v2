import { BudgetDataItem } from "@/features/budgeting/types/BudgetDataTypes";
import { ViewBox } from "recharts/types/util/types";

const PieLabel = ({ index, viewBox, chartData }: { index: number | undefined, viewBox: ViewBox | undefined, chartData: BudgetDataItem[] }) => {
  if (index == null) return null;
  const { cx, cy, outerRadius, startAngle, endAngle } = viewBox as {
    cx: number;
    cy: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
  };
  const RADIAN = Math.PI / 180;
  const total = chartData.reduce((sum, d) => sum + d.value, 0);
  const percent = (chartData[index].value / total) * 100;

  if (percent < 2.5) return null;

  const midAngle = (startAngle + endAngle) / 2;
  const radius = outerRadius + 26; // distance outside the pie
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const labelRadius = outerRadius + 20;
  const connectorRadius = outerRadius + 6;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const startX = cx + connectorRadius * cos;
  const startY = cy + connectorRadius * sin;
  const endX = cx + labelRadius * cos;
  const endY = cy + labelRadius * sin;

  return (
    <>
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="white"
        strokeWidth={0.5}
      />
      <text
        x={x}
        y={y}
        fill="white"
        stroke="black"
        strokeWidth={0.5}
        paintOrder="stroke"
        fontSize={10}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {chartData[index].category}
      </text>
    </>

  );
}

export default PieLabel