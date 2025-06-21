"use client"
import { Badge } from "@/components/ui/badge"

interface GemstoneColorFilterProps {
  selectedColors: string[]
  onColorChange: (color: string) => void
}

export default function GemstoneColorFilter({ selectedColors, onColorChange }: GemstoneColorFilterProps) {
  // Available gemstone colors (inferred from gemItems)
  const colors = [
    { value: "blue", label: "Blue", hex: "#0000FF" },
    { value: "red", label: "Red", hex: "#FF0000" },
    { value: "green", label: "Green", hex: "#008000" },
    { value: "pink", label: "Pink", hex: "#FF69B4" },
    { value: "yellow", label: "Yellow", hex: "#FFFF00" },
  ]

  return (
    <div className="space-y-3 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">Color</h3>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <Badge
            key={color.value}
            variant={selectedColors.includes(color.value) ? "default" : "outline"}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedColors.includes(color.value) ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
            }`}
            onClick={() => onColorChange(color.value)}
          >
            <div
              className="h-3 w-3 rounded-full mr-1.5"
              style={{ backgroundColor: color.hex }}
              aria-hidden="true"
            ></div>
            {color.label}
          </Badge>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-xs text-muted-foreground">Selected colors:</p>
        <div className="flex flex-wrap gap-1.5">
          {selectedColors.length === 0 ? (
            <span className="text-xs text-muted-foreground italic">None selected</span>
          ) : (
            selectedColors.map((selected) => {
              const color = colors.find((c) => c.value === selected)
              return color ? (
                <div key={color.value} className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-xs">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color.hex }}></div>
                  {color.label}
                </div>
              ) : null
            })
          )}
        </div>
      </div>
    </div>
  )
}
