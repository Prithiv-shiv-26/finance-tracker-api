import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  gradientClassName?: string; // customize gradient colors
};

export function CardHoverWrapper({ children, className, gradientClassName }: Props) {
  return (
    <div
      className={cn(
        "group relative rounded-xl p-[2px] overflow-hidden min-w-0",
        "bg-gradient-to-r from-indigo-500/30 to-purple-500/30",
        gradientClassName,
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-xl",
          "bg-gradient-to-r from-indigo-500 to-purple-500",
          gradientClassName,
          "blur opacity-0 transition-opacity duration-200 group-hover:opacity-40"
        )}
      />
      <div className="relative rounded-[12px] min-w-0">{children}</div>
    </div>
  );
}
