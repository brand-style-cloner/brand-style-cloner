"use client"

import { Palette, Download, Eye } from "lucide-react"
import { Button } from "./ui/button"

export function BrandKit() {
  const colorPalette = [
    { name: "Primary Blue", hex: "#2563eb", class: "bg-blue-600" },
    { name: "Secondary Purple", hex: "#7c3aed", class: "bg-purple-600" },
    { name: "Accent Green", hex: "#059669", class: "bg-emerald-600" },
    { name: "Neutral Gray", hex: "#6b7280", class: "bg-gray-500" },
  ]

  const typography = [
    { name: "Heading 1", class: "text-4xl font-bold", example: "Brand Style" },
    { name: "Heading 2", class: "text-2xl font-semibold", example: "Typography Guide" },
    { name: "Body Text", class: "text-base", example: "This is body text" },
    { name: "Caption", class: "text-sm text-gray-600", example: "Small caption text" },
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Brand Kit</h1>
        <p className="text-gray-600">Your complete style guide and brand assets</p>
      </div>

      {/* Color Palette */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Palette className="h-5 w-5" />
          Color Palette
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colorPalette.map((color) => (
            <div key={color.name} className="space-y-2">
              <div className={`h-20 rounded-lg ${color.class} shadow-md`}></div>
              <div>
                <p className="font-medium text-sm">{color.name}</p>
                <p className="text-xs text-gray-500">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Typography</h2>
        <div className="space-y-4">
          {typography.map((type) => (
            <div key={type.name} className="space-y-1">
              <p className="text-sm font-medium text-gray-700">{type.name}</p>
              <p className={type.class}>{type.example}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Assets */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Brand Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Logo</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 h-20 rounded flex items-center justify-center">
              <span className="text-gray-500">Logo Preview</span>
            </div>
          </div>

          <div className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Brand Guidelines</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            </div>
            <div className="bg-gray-100 h-20 rounded flex items-center justify-center">
              <span className="text-gray-500">PDF Preview</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Download All Assets
          </Button>
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview Brand Kit
          </Button>
          <Button variant="outline">
            <Palette className="h-4 w-4 mr-2" />
            Customize Colors
          </Button>
        </div>
      </div>
    </div>
  )
} 