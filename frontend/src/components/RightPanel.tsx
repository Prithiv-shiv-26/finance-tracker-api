import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "./ui/separator";

export default function RightPanel() {
  return (
    <div className="space-y-4 min-w-0 overflow-auto">
      <Card className="bg-[#121212] text-white border-white/10 py-4">
        <CardHeader>
          <CardTitle className="text-white">Category Charts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full rounded-md bg-black/40 border border-white/10" />
        </CardContent>
      </Card>

      <Card className="bg-[#121212] text-white border-white/10 py-4">
        <CardHeader>
          <CardTitle className="text-white">Monthly Totals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 w-full rounded-md bg-black/40 border border-white/10" />
        </CardContent>
      </Card>
    </div>
  );
}
