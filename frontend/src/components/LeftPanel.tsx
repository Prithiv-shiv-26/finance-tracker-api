import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Check } from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn utility (if present)
import { useState } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { CardHoverWrapper } from "@/components/ui/card-hover-wrapper";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Tags,
  TagsContent,
  TagsEmpty,
  TagsGroup,
  TagsInput,
  TagsItem,
  TagsList,
  TagsTrigger,
  TagsValue,
} from "@/components/kibo-ui/tags";

export default function LeftPanel() {
  const currencies = [
    { value: "₹", label: "Indian Rupee" },
    { value: "$", label: "US Dollar" },
    { value: "€", label: "Euro" },
    { value: "£", label: "British Pound" },
    { value: "A$", label: "Australian Dollar" },
    { value: "C$", label: "Canadian Dollar" },
    { value: "NZ$", label: "New Zealand Dollar" },
    { value: "CHF", label: "Swiss Franc" },
    { value: "¥", label: "Japanese Yen" },
    { value: "CN¥", label: "Chinese Yuan" },
  ];
  const categories = [
    "Groceries",
    "Rent",
    "Travel",
    "Shopping",
    "Utilities",
    "Entertainment",
    "Dining",
    "Bills and Fees",
    "Medicine",
    "Others",
  ];
  const tagOptions = ["default", "recurring", "upcoming", "subscription"];

  const [type, setType] = useState<"income" | "expense">("income");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState("$");
  const [category, setCategory] = useState<string | null>(null);
  const [openDate, setOpenDate] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [tags, setTags] = useState<string[]>(["default"]);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("12:00");

  return (
    <CardHoverWrapper gradientClassName="from-fuchsia-500 to-violet-500">
      <Card className="bg-[#141414] border-white/15 py-4">
        <CardHeader>
          <CardTitle className="text-white ">Quick Add Transaction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-white">
          {/* Toggle: Income / Expense using gradient buttons */}
          <div className="flex items-center gap-3">
            <GradientButton
              active={type === "income"}
              onClick={() => setType("income")}
              aria-pressed={type === "income"}
              gradientClassName="from-emerald-500 to-teal-500"
              surfaceClassName={
                type === "income"
                  ? "bg-emerald-600 text-white hover:bg-transparent"
                  : "bg-emerald-600/80 text-white hover:bg-transparent"
              }
            >
              Income
            </GradientButton>
            <GradientButton
              active={type === "expense"}
              onClick={() => setType("expense")}
              aria-pressed={type === "expense"}
              gradientClassName="from-rose-500 to-orange-500"
              surfaceClassName={
                type === "expense"
                  ? "bg-rose-600 text-white hover:bg-transparent"
                  : "bg-rose-600/80 text-white hover:bg-transparent"
              }
            >
              Expense
            </GradientButton>
          </div>
          <Separator className="my-4 bg-white/10" />

          <div className="space-y-2">
            <Label htmlFor="title" className="text-white/80">
              Title/Description
            </Label>
            <Input
              id="title"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., Groceries at Walmart"
              className="bg-black/40 border-white/10 text-white placeholder:text-white/40"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount" className="text-white/80">
              Amount
            </Label>
            <ButtonGroup>
              <div>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="min-w-[4rem] bg-black/40 border-white/10 text-white font-mono justify-center">
                    {currency}
                  </SelectTrigger>
                  <SelectContent className="bg-[#121212] text-white border-white/10 min-w-24">
                    {currencies.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        {c.value}{" "}
                        <span className="text-muted-foreground">{c.label}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input
                  id="amount"
                  type="number"
                  inputMode="decimal"
                  pattern="[0-9]*"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="10.00"
                  className="bg-black/40 border-white/10 text-white placeholder:text-white/40"
                />
              </div>
            </ButtonGroup>
          </div>

          <div className="space-y-2">
            <Label className="text-white/80">Category</Label>
            <Popover open={openCategory} onOpenChange={setOpenCategory}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between bg-black/40 border-white/10 text-white hover:bg-black/50"
                >
                  {category ?? "auto-suggest..."}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-[#121212] text-white border-white/10">
                <Command>
                  <CommandInput placeholder="Search category..." />
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((c) => (
                      <CommandItem
                        key={c}
                        value={c.toLowerCase()}
                        onSelect={() => {
                          setCategory(c);
                          setOpenCategory(false);
                        }}
                        className="gap-2"
                      >
                        <Check
                          className={cn(
                            "h-4 w-4",
                            category === c ? "opacity-100" : "opacity-0"
                          )}
                        />
                        {c}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-2">
            {/* Date */}
            <div className="flex flex-col gap-3 ">
              <Label htmlFor="date-picker" className="px-1 text-white/80">
                Date
              </Label>
              <Popover open={openDate} onOpenChange={setOpenDate}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date-picker"
                    className="w-40 justify-between font-normal bg-black/40 border-white/10 text-white hover:bg-black/50"
                  >
                    {date ? date.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon className="ml-2 h-4 w-4 opacity-80" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="!w-auto min-w-0 inline-block overflow-hidden p-0 bg-[#121212] text-white border-white/10"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(d) => {
                      setDate(d);
                    }}
                    initialFocus
                    className="[--cell-size:12px] p-1"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time */}
            <div className="flex flex-col gap-3">
              <Label htmlFor="time-picker" className="px-1 text-white/80">
                Time
              </Label>
              <Input
                type="time"
                id="time-picker"
                step="1"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-32 bg-black/40 border-white/10 text-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-white/80">Tags</Label>
            <Tags>
              <TagsTrigger>
                {tags.map((t) => (
                  <TagsValue
                    key={t}
                    onRemove={() =>
                      setTags((prev) => prev.filter((x) => x !== t))
                    }
                  >
                    {t}
                  </TagsValue>
                ))}
                {!tags.length && (
                  <span className="text-white/50">Select tags</span>
                )}
              </TagsTrigger>
              <TagsContent>
                <TagsInput placeholder="Search tag..." />
                <TagsList>
                  <TagsEmpty />
                  <TagsGroup>
                    {tagOptions.map((t) => {
                      const selected = tags.includes(t);
                      return (
                        <TagsItem
                          key={t}
                          value={t}
                          onSelect={(value) => {
                            setTags((prev) =>
                              prev.includes(value)
                                ? prev.filter((x) => x !== value)
                                : [...prev, value]
                            );
                          }}
                        >
                          <span className="capitalize">{t}</span>
                          {selected && (
                            <span className="ml-2 text-white/60">✓</span>
                          )}
                        </TagsItem>
                      );
                    })}
                  </TagsGroup>
                </TagsList>
              </TagsContent>
            </Tags>
          </div>

          <Button className="mx-auto block bg-white text-white hover:bg-white/90">
            Add
          </Button>
        </CardContent>
      </Card>
    </CardHoverWrapper>
  );
}
