import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

const Navbar: React.FC = () => {
  const metrics: { label: string; value: string; active?: boolean }[] = [
    { label: "Monthly Budget", value: "₹3,500" },
    { label: "Current Balance", value: "₹4,000" },
    { label: "Total Income", value: "₹4,500" },
    { label: "Total Expense", value: "₹1,500" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b-2 border-white/80 bg-[#0A0A0A]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4">
        <div className="flex min-w-0 flex-1 items-center overflow-x-auto">
          <div className="flex gap-30">
            {metrics.map((m) => (
              <Badge
                key={m.label}
                variant="secondary"
                className={`group relative whitespace-nowrap rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/90
                    transition-colors duration-200
                    hover:bg-white/10 hover:border-white/30 hover:text-white
                    ${m.active ? "bg-white/10 border-white/20" : ""}
                    `}
              >
                <span className="mr-2 font-medium text-white/95">
                  {m.label}:
                </span>
                <span className="font-semibold text-white">{m.value}</span>

                <span
                  className={`pointer-events-none absolute inset-x-3 -bottom-[6px] block h-0.5 rounded-full bg-white/70 transition-opacity duration-200 ${
                    m.active
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Badge>
            ))}
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full outline-none">
            <Avatar className="h-9 w-9 border border-white/10">
              <AvatarFallback className="bg-black/40 text-white">
                PR
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="min-w-44 bg-[#111] text-white"
          >
            <div className="px-2 py-1.5 text-xs text-white/60">
              Signed in as
            </div>
            <div className="px-2 pb-1 text-sm font-medium">
              prithiv@example.com
            </div>
            <Separator className="my-1 bg-white/10" />
            <DropdownMenuItem className="cursor-pointer">
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Settings
            </DropdownMenuItem>
            <Separator className="my-1 bg-white/10" />
            <DropdownMenuItem className="cursor-pointer text-red-400">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
