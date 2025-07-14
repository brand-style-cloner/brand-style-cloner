# API Server

This is the API server for the brand style cloner application, powered by ChatGPT for comprehensive YouTube video analysis.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the `apps/api` directory with the following variables:
```env
PORT=3002
OPENAI_API_KEY=your_openai_api_key_here
```

## Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## API Endpoints

### Health Check
- **GET** `/api/health`
- Returns server status and timestamp

### Hello World
- **GET** `/api/hello`
- Returns a simple hello message

### YouTube Video Analysis
- **GET** `/api/youtube/analyze?videoUrl=YOUR_YOUTUBE_URL`
- Analyzes a YouTube video using ChatGPT and returns comprehensive insights

#### Example Usage:
```
GET /api/youtube/analyze?videoUrl=https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

#### Response Format:
```json
{
  "success": true,
  "videoUrl": "https://youtube.com/watch?v=...",
  "analysis": {
    "videoInfo": {
      "title": "Video Title",
      "channel": "Channel Name",
      "duration": "10:30",
      "publishedDate": "2023-01-01",
      "viewCount": "1.2M",
      "likeCount": "50K",
      "description": "Video description..."
    },
    "content": {
      "transcript": "Full transcript of the video...",
      "wordCount": 1250,
      "speakingPace": "150 words per minute",
      "hasTranscript": true
    },
    "analysis": {
      "summary": "Brief content summary",
      "keyTopics": ["topic1", "topic2", "topic3"],
      "sentiment": "positive",
      "tone": "educational",
      "complexity": "moderate",
      "targetAudience": "beginner programmers",
      "mainPoints": ["point1", "point2", "point3"],
      "language": "English",
      "estimatedDuration": "8 minutes"
    },
    "insights": {
      "shortSummary": "Brief summary",
      "detailedSummary": "Comprehensive summary",
      "keyInsights": ["insight1", "insight2", "insight3"],
      "recommendations": ["recommendation1", "recommendation2"],
      "contentQuality": "High quality educational content",
      "engagementPotential": "Good engagement potential"
    }
  },
  "timestamp": "2023-01-01T00:00:00.000Z"
}
```

## OpenAI API Key

The application uses OpenAI's GPT-4 model for video analysis. Make sure your API key has access to:
- GPT-4 model
- Sufficient credits for API calls

## Features

### 🤖 AI-Powered Analysis
- **Content Summarization**: Automatic video summaries
- **Sentiment Analysis**: Positive, negative, or neutral tone
- **Topic Extraction**: Key themes and subjects
- **Audience Targeting**: Identifies target viewers
- **Quality Assessment**: Content quality and engagement potential

### 📊 Comprehensive Insights
- **Video Metadata**: Title, channel, views, likes
- **Content Analysis**: Transcript, word count, speaking pace
- **AI Insights**: Detailed analysis and recommendations
- **Quality Metrics**: Content quality and engagement assessment

## Error Handling

The API includes comprehensive error handling for:
- Invalid YouTube URLs
- Missing OpenAI API key
- Network errors
- Invalid requests
- ChatGPT analysis failures

## Architecture

### 📁 Project Structure
```
apps/api/src/
├── controllers/
│   └── chatgptController.ts    # Main controller
├── services/
│   ├── chatgptService.ts       # ChatGPT integration
│   └── analysisService.ts      # Placeholder for future needs
├── routes/
│   ├── index.ts               # Main routes
│   └── youtube.ts             # YouTube analysis routes
└── index.ts                   # Server entry point
```

### 🔧 Key Benefits
- **Single API Call**: One ChatGPT call does everything
- **No Dependencies**: No YouTube API or transcript libraries
- **Rich Analysis**: Comprehensive AI-powered insights
- **Reliable**: Works with any publicly available YouTube video
- **Scalable**: Easy to extend with additional features 