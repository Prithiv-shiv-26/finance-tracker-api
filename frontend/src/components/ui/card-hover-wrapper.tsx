import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  gradientClassName?: string; // optional extra classes
};

export function CardHoverWrapper({
  children,
  className,
  gradientClassName,
}: Props) {
  // Tailwind arbitrary gradient class
  const gradient =
    "bg-[linear-gradient(90deg,#0e95b0_0%,#1b1b75_50%,#21a9c4_100%)]";

  return (
    <div
      className={cn(
        "group relative rounded-xl p-[2px] overflow-hidden min-w-0",
        gradient,
        className,
        gradientClassName
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-xl blur opacity-0 transition-opacity duration-200 group-hover:opacity-40",
          gradient
        )}
      />
      <div className="relative rounded-[12px] min-w-0 h-full flex flex-col min-h-0">
        {children}
      </div>
    </div>
  );
}
