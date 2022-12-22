import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts'

const Chart = ({ data }) => {
  const chartData = [
    {
      name: 'Расходы',
      value: data.totalExpenses,
    },
    {
      name: 'Остаток',
      value: data.totalBalance,
    },
  ]

  return (
    data.totalExpenses != 0 && (
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#164e63"
            label
            labelLine={false}
            isAnimationActive
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    )
  )
}

export default Chart
