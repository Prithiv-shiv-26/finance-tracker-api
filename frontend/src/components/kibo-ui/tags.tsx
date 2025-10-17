import * as React from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { X } from "lucide-react";

type TagsContextValue = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const TagsContext = React.createContext<TagsContextValue | null>(null);

export function Tags({ className, children }: { className?: string; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <TagsContext.Provider value={{ open, setOpen }}>
      <Popover open={open} onOpenChange={setOpen}>
        <div className={cn("w-full", className)}>{children}</div>
      </Popover>
    </TagsContext.Provider>
  );
}

export function TagsTrigger({ children, className }: { children: React.ReactNode; className?: string }) {
  const ctx = React.useContext(TagsContext)!;
  return (
    <PopoverTrigger asChild>
      <button
        type="button"
        onClick={() => ctx.setOpen(!ctx.open)}
        className={cn(
          "w-full min-h-10 rounded-md border border-white/10 bg-black/40 text-left",
          "flex flex-wrap items-center gap-2 px-3 py-2 text-white hover:bg-black/50",
          className
        )}
      >
        {children}
      </button>
    </PopoverTrigger>
  );
}

export function TagsContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <PopoverContent className={cn("w-[--radix-popover-trigger-width] p-0 bg-[#121212] text-white border-white/10", className)}>
      <Command>
        {children}
      </Command>
    </PopoverContent>
  );
}

export function TagsInput(props: React.ComponentProps<typeof CommandInput>) {
  return <CommandInput {...props} />;
}

export function TagsList({ children }: { children: React.ReactNode }) {
  return <CommandList>{children}</CommandList>;
}

export function TagsGroup({ children }: { children: React.ReactNode }) {
  return <CommandGroup>{children}</CommandGroup>;
}

export function TagsItem({ children, value, onSelect }: { children: React.ReactNode; value: string; onSelect: (value: string) => void }) {
  const ctx = React.useContext(TagsContext)!;
  return (
    <CommandItem
      value={value}
      onSelect={() => {
        onSelect(value);
        ctx.setOpen(true);
      }}
      className="gap-2"
    >
      {children}
    </CommandItem>
  );
}

export function TagsEmpty() {
  return <CommandEmpty>No tags found.</CommandEmpty>;
}

export function TagsValue({ children, onRemove }: { children: React.ReactNode; onRemove?: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs">
      {children}
      {onRemove && (
        <button type="button" onClick={onRemove} className="ml-1 rounded p-0.5 hover:bg-white/10">
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
}
