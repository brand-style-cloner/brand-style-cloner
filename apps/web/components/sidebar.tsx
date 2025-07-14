"use client"

import { Home, Palette, Sparkles } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()
  
  const navigationItems = [
    {
      id: "/",
      label: "Home",
      icon: Home,
      description: "YouTube Analyzer",
      href: "/"
    },
    {
      id: "/projects",
      label: "My Projects",
      icon: Sparkles,
      description: "Saved content projects",
      href: "/projects"
    },
    {
      id: "/brand-kit",
      label: "Brand Kit",
      icon: Palette,
      description: "Style Guide & Assets",
      href: "/brand-kit"
    }
  ]

  return (
    <div className="flex h-screen w-64 flex-col bg-gray-50 border-r border-gray-200">
      {/* Header */}
      <div className="flex h-16 items-center px-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold text-gray-900">Brand Style</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link key={item.id} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start h-12 px-4",
                  isActive 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <Icon className="h-5 w-5 mr-3" />
                <div className="flex flex-col items-start">
                  <span className="font-medium">{item.label}</span>
                  <span className={cn(
                    "text-xs",
                    isActive ? "text-blue-100" : "text-gray-500"
                  )}>
                    {item.description}
                  </span>
                </div>
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          Powered by AI
        </div>
      </div>
    </div>
  )
} 