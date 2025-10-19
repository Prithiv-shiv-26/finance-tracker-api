import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardHoverWrapper } from "@/components/ui/card-hover-wrapper";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { ChartPieDonutActive } from "@/components/charts/ChartPieDonutActive";

export default function RightPanel() {
  const [split, setSplit] = React.useState<"categories" | "tags">("categories");
  const [tracker, setTracker] = React.useState<"budget" | "category">("budget");

  // Placeholder summary data
  const categoriesData = [
    { category: "Food", value: 275 },
    { category: "Transport", value: 200 },
    { category: "Shopping", value: 187 },
    { category: "Bills", value: 173 },
    { category: "Other", value: 90 },
  ];

  const tagsData = [
    { category: "Essentials", value: 320 },
    { category: "Leisure", value: 140 },
    { category: "Subscriptions", value: 95 },
    { category: "One-off", value: 60 },
    { category: "Misc", value: 40 },
  ];

  // Placeholder data for budget progress (current vs previous)
  const budgetData = [
    { month: "January", current: 186, previous: 80 },
    { month: "February", current: 305, previous: 200 },
    { month: "March", current: 237, previous: 120 },
    { month: "April", current: 173, previous: 190 },
    { month: "May", current: 209, previous: 130 },
    { month: "June", current: 214, previous: 140 },
  ];

  const budgetChartConfig = {
    current: { label: "Current", color: "#3B82F6" },
    previous: { label: "Previous", color: "#60A5FA" },
  };

  const categoryChartData = [
    { category: "Food", current: 120, previous: 100 },
    { category: "Transport", current: 90, previous: 80 },
    { category: "Shopping", current: 140, previous: 110 },
    { category: "Bills", current: 130, previous: 120 },
    { category: "Other", current: 70, previous: 60 },
  ];

  const categoryChartConfig = {
    current: { label: "Current", color: "#3B82F6" },
    previous: { label: "Previous", color: "#60A5FA" },
  };

  const activeData = split === "categories" ? categoriesData : tagsData;
  const title = split === "categories" ? "Category Split" : "Tag Split";

  return (
    <CardHoverWrapper
      className="h-full"
      gradientClassName="from-fuchsia-500 to-violet-500"
    >
      <Card className="bg-[#121212] text-white border-white/10 flex flex-col flex-1 min-h-0 h-full">
        <ScrollArea className="h-full pr-2">
          <CardContent className="flex-1 min-h-0 py-4">
            <div className="space-y-4">
              <Card className="bg-[#0f0f0f] text-white border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">
                    Transactions Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Merchant</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>2025-01-03</TableCell>
                        <TableCell>Starbucks</TableCell>
                        <TableCell className="text-right">-$8.50</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-01-05</TableCell>
                        <TableCell>Amazon</TableCell>
                        <TableCell className="text-right">-$42.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-01-07</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell className="text-right text-emerald-400">
                          +$2,000.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2025-01-09</TableCell>
                        <TableCell>Uber</TableCell>
                        <TableCell className="text-right">-$13.20</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card className="bg-[#0f0f0f] text-white border-white/10">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">
                      {tracker === "budget"
                        ? "Budget Tracker"
                        : "Category Tracker"}
                    </CardTitle>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setTracker(tracker === "budget" ? "category" : "budget")
                      }
                    >
                      {tracker === "budget" ? "Category view" : "Budget view"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {tracker === "budget" ? (
                    <ChartContainer
                      config={budgetChartConfig}
                      className="w-full"
                    >
                      <AreaChart
                        accessibilityLayer
                        data={budgetData}
                        margin={{ left: 12, right: 12 }}
                        width={520}
                        height={260}
                      >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          tickFormatter={(value: string) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent />}
                        />
                        <defs>
                          <linearGradient
                            id="fillCurrent"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="var(--color-current)"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="var(--color-current)"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                          <linearGradient
                            id="fillPrevious"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="var(--color-previous)"
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor="var(--color-previous)"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        </defs>
                        <Area
                          dataKey="previous"
                          type="natural"
                          fill="url(#fillPrevious)"
                          fillOpacity={0.4}
                          stroke="var(--color-previous)"
                          strokeWidth={2}
                        />
                        <Area
                          dataKey="current"
                          type="natural"
                          fill="url(#fillCurrent)"
                          fillOpacity={0.5}
                          stroke="var(--color-current)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ChartContainer>
                  ) : (
                    <ChartContainer
                      config={categoryChartConfig}
                      className="w-full"
                    >
                      <BarChart
                        accessibilityLayer
                        data={categoryChartData}
                        width={520}
                        height={260}
                      >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                          dataKey="category"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                        />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          tickMargin={5}
                          width={40}
                          tickFormatter={(v: number) => `$${v}`}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent hideLabel />}
                        />
                        <ChartLegend layout="vertical" content={<ChartLegendContent />} />
                        <Bar
                          dataKey="previous"
                          stackId="a"
                          fill="var(--color-previous)"
                          radius={[0, 0, 4, 4]}
                        />
                        <Bar
                          dataKey="current"
                          stackId="a"
                          fill="var(--color-current)"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ChartContainer>
                  )}
                </CardContent>
              </Card>

              <ChartPieDonutActive
                title={title}
                data={activeData}
                headerRight={
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Split
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="min-w-[10rem]">
                      <DropdownMenuLabel>Show</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => setSplit("categories")}>
                        Categories
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setSplit("tags")}>
                        Tags
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                }
              />
            </div>
          </CardContent>
        </ScrollArea>
      </Card>
    </CardHoverWrapper>
  );
}
