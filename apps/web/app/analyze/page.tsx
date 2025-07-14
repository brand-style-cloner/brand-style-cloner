"use client"

import { useState } from "react"
import { Youtube, Plus, X, ThumbsUp, Sparkles, Target, Palette, Zap, RotateCcw } from "lucide-react"
import { Button } from "../../components/ui/button"
import { cn } from "../../lib/utils"

const brands = [
  { id: "nike", name: "Nike", description: "Athletic wear and sports" },
  { id: "apple", name: "Apple", description: "Technology and innovation" },
  { id: "coca-cola", name: "Coca-Cola", description: "Beverages and refreshment" },
  { id: "tesla", name: "Tesla", description: "Electric vehicles and sustainability" },
  { id: "starbucks", name: "Starbucks", description: "Coffee and lifestyle" },
]

interface YouTubeUrl {
  id: string
  url: string
  isValid: boolean
}

export default function AnalyzePage() {
  const [urls, setUrls] = useState<YouTubeUrl[]>([{ id: "1", url: "", isValid: true }])
  const [selectedBrand, setSelectedBrand] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [topics, setTopics] = useState<string[]>([])
  const [selectedTopic, setSelectedTopic] = useState<string>("")
  const [results, setResults] = useState<any | null>(null)
  const [showSave, setShowSave] = useState(false)
  const [projectName, setProjectName] = useState("")
  const [loadingContent, setLoadingContent] = useState(false)

  const validateYouTubeUrl = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/
    return youtubeRegex.test(url.trim())
  }

  const addUrlField = () => {
    if (urls.length < 4) {
      const newId = (urls.length + 1).toString()
      setUrls([...urls, { id: newId, url: "", isValid: true }])
    }
  }

  const removeUrlField = (id: string) => {
    if (urls.length > 1) {
      setUrls(urls.filter(url => url.id !== id))
    }
  }

  const updateUrl = (id: string, value: string) => {
    setUrls(urls.map(url => 
      url.id === id 
        ? { ...url, url: value, isValid: validateYouTubeUrl(value) }
        : url
    ))
  }

  // Step 1: Analyze
  const handleAnalyze = async () => {
    if (!selectedBrand) return
    setIsAnalyzing(true)
    setTopics([])
    setSelectedTopic("")
    setResults(null)
    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 2000))
    setTopics([
      "How to create engaging brand stories",
      "Top 5 tips for consistent brand messaging",
      "Leveraging video for brand growth",
      "Building trust with your audience"
    ])
    setIsAnalyzing(false)
  }

  // Step 2: Generate content for selected topic
  const handleGenerateContent = async (topic: string) => {
    setSelectedTopic(topic)
    setLoadingContent(true)
    // Simulate content generation
    await new Promise(resolve => setTimeout(resolve, 1500))
    setResults({
      topic,
      script: `**${topic}**\n\nThis script is tailored for the ${brands.find(b => b.id === selectedBrand)?.name} brand style.\n\n1. Start with a strong hook that resonates with your audience.\n2. Use visuals and language that reflect your brand's values.\n3. End with a clear call to action.\n\n[Generated content for: ${topic}]`,
      title: `How to Master ${topic}`,
      description: `Learn about ${topic} in this video. Discover tips and strategies for your brand!`,
      hashtags: ["#BrandStory", "#ContentTips", "#Marketing", "#AIContent"]
    })
    setLoadingContent(false)
  }

  // Step 3: Save as project
  const handleSaveProject = () => {
    // Here you would save to backend or state
    setShowSave(false)
    setProjectName("")
  }

  const handleReset = () => {
    setUrls([{ id: "1", url: "", isValid: true }])
    setSelectedBrand("")
    setTopics([])
    setSelectedTopic("")
    setResults(null)
    setShowSave(false)
    setProjectName("")
    setLoadingContent(false)
  }

  const canAnalyze = selectedBrand && urls.some(url => url.url.trim() && url.isValid)

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left: Input Form */}
      <div className="w-full max-w-md border-r bg-gray-50 p-8 flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">YouTube Analyzer</h2>
          <p className="text-gray-600 mb-4">Enter up to 4 YouTube video URLs and select your brand to analyze content style and get content ideas.</p>
          
          {/* What you'll get section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-blue-600" />
              What you'll get:
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-2 text-sm">
                <Target className="h-4 w-4 text-blue-600" />
                <span className="text-gray-900">Brand style analysis</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Palette className="h-4 w-4 text-purple-600" />
                <span className="text-gray-900">Color palette extraction</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-yellow-600" />
                <span className="text-gray-900">Content recommendations</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">Select your brand:</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none transition appearance-none pr-10"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;utf8,<svg fill=\"none\" stroke=\"%236B7280\" stroke-width=\"2\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19 9l-7 7-7-7\"></path></svg>')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.25em 1.25em",
              }}
            >
              <option value="">Choose a brand...</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name} - {brand.description}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-3 mt-6">
            <label className="text-sm font-medium text-gray-700">YouTube Video URLs (up to 4):</label>
            <div className="space-y-3">
              {urls.map((urlField, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={urlField.url}
                      onChange={(e) => updateUrl(urlField.id, e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className={cn(
                        "w-full px-4 py-3 border rounded-lg bg-white text-gray-900 shadow-sm focus:outline-none transition",
                        urlField.url && !urlField.isValid 
                          ? "border-red-300" 
                          : "border-gray-300"
                      )}
                    />
                    {urlField.url && !urlField.isValid && (
                      <p className="text-xs text-red-600 mt-1">
                        Please enter a valid YouTube URL
                      </p>
                    )}
                  </div>
                  {urls.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeUrlField(urlField.id)}
                      className="px-3"
                    >
                      <X className="h-4 w-4 text-gray-900" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
            {urls.length < 4 && (
              <Button
                variant="outline"
                onClick={addUrlField}
                className="w-full border-dashed border-2 border-gray-300 hover:border-gray-400 text-gray-900"
              >
                <Plus className="h-4 w-4 mr-2 text-gray-900" />
                Add another URL
              </Button>
            )}
          </div>
          <Button
            onClick={handleAnalyze}
            disabled={!canAnalyze || isAnalyzing}
            className="w-full mt-6 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg"
          >
            {isAnalyzing ? (
              <>
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                Analyzing...
              </>
            ) : (
              <>
                <Youtube className="h-4 w-4 mr-2" />
                Analyze
              </>
            )}
          </Button>
          <Button
            onClick={handleReset}
            disabled={!selectedBrand && urls.every(url => !url.url)}
            variant="outline"
            size="sm"
            className="w-full mt-3 text-gray-600 hover:text-gray-800"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset All
          </Button>
        </div>
      </div>
      {/* Right: Results */}
      <div className="flex-1 p-8 flex flex-col gap-8 relative">
        {!topics.length && (
          <div className="text-gray-400 text-center mt-24">Analysis results will appear here after you analyze videos.</div>
        )}
        {topics.length > 0 && (
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Suggested Content Topics</h2>
            <ul className="space-y-3 mb-6">
              {topics.map((topic, idx) => (
                <li key={idx}>
                  <Button
                    variant={selectedTopic === topic ? "default" : "outline"}
                    className="w-full text-left justify-start text-gray-900"
                    onClick={() => handleGenerateContent(topic)}
                    disabled={selectedTopic === topic}
                  >
                    {topic}
                  </Button>
                </li>
              ))}
            </ul>
            {/* Content generation */}
            {selectedTopic && (
              <div className="space-y-6">
                {loadingContent ? (
                  <div className="flex items-center gap-2 text-blue-600 font-medium">
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></span>
                    Generating content for: {selectedTopic}
                  </div>
                ) : (
                  results && (
                    <div className="bg-white rounded-lg p-6 border shadow space-y-4 overflow-y-auto max-h-[calc(100vh-420px)]">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-gray-900">Script</h4>
                        <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">{results.script}</pre>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-gray-900">Video Title</h4>
                        <div className="bg-gray-50 rounded p-2 text-gray-900 border font-mono">{results.title}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-gray-900">Description</h4>
                        <div className="bg-gray-50 rounded p-2 text-gray-900 border font-mono">{results.description}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 text-gray-900">Hashtag Suggestions</h4>
                        <div className="flex flex-wrap gap-2">
                          {results.hashtags.map((tag: string) => (
                            <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-mono">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        )}
        
        {/* Sticky Footer */}
        {results && !loadingContent && (
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 -mx-8 -mb-8">
            <div className="flex justify-end">
              <Button
                onClick={() => setShowSave(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Save as Project
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Save Project Dialog */}
      {showSave && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Name your project</h3>
            <input
              type="text"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              placeholder="Project name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none"
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowSave(false)} className="text-gray-900">Cancel</Button>
              <Button
                onClick={handleSaveProject}
                disabled={!projectName.trim()}
                className="bg-blue-600 text-white"
              >
                Save Project
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 