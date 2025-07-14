"use client"

import { Sparkles, Lightbulb, Zap, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "../components/ui/button"

export default function Home() {
  return (
    <div className="p-4 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Brand Style
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Transform your brand with AI-powered script generation. Create compelling content 
          that resonates with your audience and reflects your unique brand identity.
        </p>
      </div>
  
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <Sparkles className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            AI Script Generation
          </h3>
          <p className="text-gray-600">
            Generate creative scripts tailored to your brand style and messaging.
          </p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-pink-100 p-6 rounded-xl border border-red-200">
          <Youtube className="h-8 w-8 text-red-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            YouTube Analysis
          </h3>
          <p className="text-gray-600">
            Analyze YouTube videos to extract brand patterns and generate matching content.
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <Lightbulb className="h-8 w-8 text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Brand Consistency
          </h3>
          <p className="text-gray-600">
            Maintain consistent messaging across all your content and campaigns.
          </p>
        </div>
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200">
          <Zap className="h-8 w-8 text-emerald-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Quick & Easy
          </h3>
          <p className="text-gray-600">
            Generate professional scripts in seconds with our advanced AI technology.
          </p>
        </div>
      </div>

      {/* AI Script Generator Section */}
      <div className="bg-gray-50 rounded-xl p-8 border">
        <div className="text-center space-y-4 mb-8">
          <Sparkles className="h-12 w-12 text-blue-600 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-900">
            Generate Your Next Script
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI analyzes your brand style and creates compelling scripts that match 
            your voice, tone, and messaging. Perfect for videos, social media, and marketing campaigns.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/analyze">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg"
            >
              <Youtube className="mr-2 h-5 w-5" />
              Analyze YouTube Videos
            </Button>
          </Link>
        </div>
      </div>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">
              1
            </div>
            <h3 className="font-semibold text-gray-900">Click Analyze</h3>
            <p className="text-gray-600 text-sm">
              Start the AI script generation process with a single click.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">
              2
            </div>
            <h3 className="font-semibold text-gray-900">AI Analysis</h3>
            <p className="text-gray-600 text-sm">
              Our AI analyzes your brand style and creates tailored content.
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-lg font-bold">
              3
            </div>
            <h3 className="font-semibold text-gray-900">Get Your Script</h3>
            <p className="text-gray-600 text-sm">
              Receive a professional script ready for your next campaign.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}