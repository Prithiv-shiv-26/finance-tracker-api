import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardHoverWrapper } from "@/components/ui/card-hover-wrapper";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartPieDonutActive } from "@/components/charts/ChartPieDonutActive";

export default function RightPanel() {
  return (
    <CardHoverWrapper className="h-full" gradientClassName="from-fuchsia-500 to-violet-500">
      <Card className="bg-[#121212] text-white border-white/10 flex flex-col flex-1 min-h-0 h-full">
        <ScrollArea className="h-full pr-2">
          <CardContent className="flex-1 min-h-0 py-4">
            <div className="space-y-4">
              <Card className="bg-[#0f0f0f] text-white border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Transactions Summary</CardTitle>
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
                        <TableCell className="text-right text-emerald-400">+$2,000.00</TableCell>
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

              <ChartPieDonutActive />
            </div>
          </CardContent>
        </ScrollArea>
      </Card>
    </CardHoverWrapper>
  );
}
