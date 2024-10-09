import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

function BarChartDashboard({ budgetList }) {
  //format budgetList data
  const chartData = budgetList.map((item) => ({
    name: item.name,
    amount: Number(item.amount),
    totalExpenses: Number(item.totalSpend),
  }));

  const chartConfig = {
    amount: {
      label: "amount",
    },
    totalExpenses: {
      label: "totalExpenses",
    },
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Chart - Budget Amount:Expenses</CardTitle>
        <CardDescription>Budget Amount & Expenses Breakdown</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                value.length > 20 ? value.slice(0, 20) + "..." : value
              }
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="totalExpenses"
              stackId="a"
              fill="#e86f51"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="amount"
              stackId="a"
              fill="#00ba79"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default BarChartDashboard;
