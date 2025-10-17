import React from "react";
import { cn } from "@/lib/utils";

type GradientButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  gradientClassName?: string; // controls outer gradient colors
  surfaceClassName?: string;  // controls inner surface background
};

export function GradientButton({
  active,
  gradientClassName,
  surfaceClassName,
  className,
  children,
  ...props
}: GradientButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "relative p-[2px] rounded-lg transition",
        "bg-gradient-to-r from-indigo-500 to-purple-500",
        gradientClassName,
        className
      )}
    >
      {/* hover glow */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 rounded-lg",
          "bg-gradient-to-r from-indigo-500 to-purple-500",
          gradientClassName,
          "blur opacity-0 transition-opacity duration-200 hover:opacity-40"
        )}
      />
      {/* inner surface */}
      <span
        className={cn(
          "relative block rounded-[6px] px-6 py-2 text-sm font-medium transition-colors",
          active ? "bg-transparent text-white" : "bg-black text-white hover:bg-transparent",
          surfaceClassName
        )}
      >
        {children}
      </span>
    </button>
  );
}
