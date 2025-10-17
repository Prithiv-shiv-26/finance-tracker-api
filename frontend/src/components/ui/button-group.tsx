import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-stretch gap-px rounded-md border border-white/10 bg-black/40",
        "[&>*>*]:rounded-none [&>*:first-child>*]:rounded-l-md [&>*:last-child>*]:rounded-r-md",
        className
      )}
      {...props}
    />
  )
);
ButtonGroup.displayName = "ButtonGroup";
