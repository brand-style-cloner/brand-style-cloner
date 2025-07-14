"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([])

  return (
    <div className="p-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
        </div>
        
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <Sparkles className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Create content from YouTube videos to save your first project! 
              Use the YouTube Analyzer to generate content and save it as a project.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-500">Brand: {project.brandName}</p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                <div className="bg-gray-50 rounded p-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
                    {project.content}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 