"use client";

import * as React from "react";
import { Pie, PieChart, Legend } from "recharts";
import { Sector } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with an active sector";

// Placeholder category data using shades of blue
const chartData = [
  { category: "Food", value: 275, fill: "var(--color-food)" },
  { category: "Transport", value: 200, fill: "var(--color-transport)" },
  { category: "Shopping", value: 187, fill: "var(--color-shopping)" },
  { category: "Bills", value: 173, fill: "var(--color-bills)" },
  { category: "Other", value: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  value: { label: "Amount" },
  food: { label: "Food", color: "#1E40AF" },
  transport: { label: "Transport", color: "#2563EB" },
  shopping: { label: "Shopping", color: "#3B82F6" },
  bills: { label: "Bills", color: "#60A5FA" },
  other: { label: "Other", color: "#93C5FD" },
} satisfies ChartConfig;

export function ChartPieDonutActive() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Card className="flex flex-col bg-[#121212] text-white border-white/10">
      <CardHeader className="items-center pb-0">
        <CardTitle>Category Split</CardTitle>
        <CardDescription>Placeholder data</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-2">
        <ChartContainer config={chartConfig} className="mx-auto max-w-[320px]">
          <PieChart width={300} height={300}>
            <Legend
              verticalAlign="bottom"
              iconType="triangle"
              layout="horizontal"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            {(() => {
              const pieProps: any = {
                data: chartData,
                dataKey: "value",
                nameKey: "category",
                innerRadius: 60,
                outerRadius: 110,
                activeIndex,
                stroke: "transparent",
                activeShape: ({ outerRadius = 0, ...props }: any) => (
                  <Sector {...props} outerRadius={outerRadius + 10} />
                ),
                onMouseEnter: (_data: any, index: number) => {
                  setActiveIndex(index);
                },
              };
              return <Pie {...pieProps} />;
            })()}
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Placeholder: category distribution (click a slice to highlight)
        </div>
      </CardFooter>
    </Card>
  );
}
