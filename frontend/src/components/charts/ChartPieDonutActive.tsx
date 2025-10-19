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
const defaultData: ChartDatum[] = [
  { category: "Food", value: 275 },
  { category: "Transport", value: 200 },
  { category: "Shopping", value: 187 },
  { category: "Bills", value: 173 },
  { category: "Other", value: 90 },
];

const bluePalette = ["#1E40AF", "#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"];

const chartConfig = {
  value: { label: "Amount" },
} satisfies ChartConfig;

type ChartDatum = { category: string; value: number; color?: string };

export function ChartPieDonutActive({
  title = "Category Split",
  data,
  headerRight,
}: {
  title?: string;
  data?: ChartDatum[];
  headerRight?: React.ReactNode;
}) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const src = (data && data.length ? data : defaultData).slice(0, 12);
  const chartData = src.map((d, i) => ({
    category: d.category,
    value: d.value,
    fill: d.color ?? bluePalette[i % bluePalette.length],
  }));

  return (
    <Card className="flex flex-col bg-[#121212] text-white border-white/10">
      <CardHeader className="pb-0">
        <div className="flex items-center justify-between w-full gap-2">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Placeholder data</CardDescription>
          </div>
          {headerRight ? <div className="shrink-0">{headerRight}</div> : null}
        </div>
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
