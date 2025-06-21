"use client"

import type React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface GemstoneShapeFilterProps {
  shapes: string[]
  selectedShapes: string[]
  onShapeChange: (shape: string) => void
}

export default function GemstoneShapeFilter({ shapes, selectedShapes, onShapeChange }: GemstoneShapeFilterProps) {
  // Map shape names to SVG icons
  const shapeIcons: Record<string, React.ReactNode> = {
    Round: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    Oval: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <ellipse cx="50" cy="50" rx="30" ry="40" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    Cushion: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="20" width="60" height="60" rx="15" ry="15" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    Pear: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50,10 C70,10 80,30 80,50 C80,75 65,90 50,90 C35,90 20,75 20,50 C20,30 30,10 50,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    Princess: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    Emerald: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="25" y="15" width="50" height="70" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    Marquise: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    Asscher: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="1" />
        <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
    Heart: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50,90 C50,90 10,65 10,35 C10,15 25,10 40,20 C45,25 50,35 50,35 C50,35 55,25 60,20 C75,10 90,15 90,35 C90,65 50,90 50,90"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  }

  return (
    <div className="p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm">
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Shape</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
        {shapes.map((shape) => (
          <button
            key={shape}
            onClick={() => onShapeChange(shape)}
            className={cn(
              "p-2 border rounded-md flex flex-col items-center justify-center h-20",
              "transition-all duration-200 hover:border-primary hover:shadow-sm",
              selectedShapes.includes(shape)
                ? "border-primary bg-primary/10 shadow-inner"
                : "border-border/50 bg-background",
            )}
          >
            <div className="h-10 w-10 mb-1 text-primary/80">{shapeIcons[shape]}</div>
            <span className="text-xs text-center font-medium">{shape}</span>
          </button>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-xs text-muted-foreground mb-2">Selected shapes:</p>
        <div className="flex flex-wrap gap-1.5">
          {selectedShapes.length === 0 ? (
            <span className="text-xs text-muted-foreground italic">None selected</span>
          ) : (
            selectedShapes.map((shape) => (
              <Badge key={shape} variant="secondary" className="flex items-center gap-1">
                <div className="h-3 w-3 text-primary/80">{shapeIcons[shape]}</div>
                {shape}
              </Badge>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
