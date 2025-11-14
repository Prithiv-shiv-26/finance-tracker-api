"use client"

import * as React from "react"
import { Tooltip as RechartsTooltip, Legend as RechartsLegend } from "recharts"
import { cn } from "@/lib/utils"

export type ChartConfig = Record<
  string,
  {
    label: string
    color?: string
  }
>

export function ChartContainer({
  config,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { config: ChartConfig }) {
  const styleVars: React.CSSProperties = {}
  // expose config colors as CSS vars like --color-<key>
  Object.entries(config).forEach(([key, value]) => {
    if (value?.color) {
      ;(styleVars as any)[`--color-${key}`] = value.color
    }
  })

  return (
    <div
      data-slot="chart-container"
      className={cn("relative", className)}
      style={styleVars}
      {...props}
    >
      {children}
    </div>
  )
}

export const ChartTooltip = RechartsTooltip

// Loosen types to avoid depending on recharts type declarations
export function ChartTooltipContent({ label, payload, hideLabel }: any) {
  if (!payload || payload.length === 0) return null
  const item = payload[0]

  return (
    <div className="rounded-md border border-white/10 bg-black/80 px-2 py-1 text-xs text-white shadow-md">
      {!hideLabel && label ? (
        <div className="mb-0.5 font-medium opacity-90">{String(label)}</div>
      ) : null}
      <div className="flex items-center gap-2">
        {item?.color ? (
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: item.color as string }}
          />
        ) : null}
        <span className="opacity-90">{String(item?.name ?? "Value")}</span>
        <span className="font-semibold">{String(item?.value ?? "-")}</span>
      </div>
    </div>
  )
}

// Re-export Recharts Legend under a shadcn-friendly name
export const ChartLegend = RechartsLegend

export function ChartLegendContent({ payload }: any) {
  if (!payload || payload.length === 0) return null
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs text-white/90">
      {payload.map((entry: any, idx: number) => (
        <div key={idx} className="inline-flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ background: (entry.color as string) ?? "#999" }}
          />
          <span className="opacity-90">{String(entry.value ?? entry.dataKey)}</span>
        </div>
      ))}
    </div>
  )
}
