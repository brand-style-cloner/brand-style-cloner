import OpenAI from 'openai';

export interface VideoAnalysis {
  videoInfo: {
    title: string;
    channel: string;
    duration: string;
    publishedDate: string;
    viewCount: string;
    likeCount: string;
    description: string;
  };
  content: {
    transcript: string;
    wordCount: number;
    speakingPace: string;
    hasTranscript: boolean;
  };
  analysis: {
    summary: string;
    keyTopics: string[];
    sentiment: 'positive' | 'negative' | 'neutral';
    tone: string;
    complexity: 'simple' | 'moderate' | 'complex';
    targetAudience: string;
    mainPoints: string[];
    language: string;
    estimatedDuration: string;
  };
  insights: {
    shortSummary: string;
    detailedSummary: string;
    keyInsights: string[];
    recommendations: string[];
    contentQuality: string;
    engagementPotential: string;
  };
}

export class ChatGPTService {
  private openai: OpenAI;

  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OpenAI API key not configured');
    }
    
    this.openai = new OpenAI({
      apiKey: apiKey
    });
  }

  async analyzeYouTubeVideo(videoUrl: string): Promise<VideoAnalysis> {
    try {
      const prompt = `
You are an expert YouTube video analyst. Analyze the following YouTube video and provide comprehensive insights.

YouTube Video URL: ${videoUrl}

Please provide a complete analysis including:

1. **Video Information** (extract from the video):
   - Title
   - Channel name
   - Duration
   - Publication date
   - View count
   - Like count
   - Description

2. **Content Analysis** (from the video transcript/audio):
   - Full transcript of what was said
   - Word count
   - Speaking pace (words per minute)
   - Whether transcript is available

3. **AI Analysis**:
   - Brief summary of content
   - Key topics discussed
   - Overall sentiment (positive/negative/neutral)
   - Tone (professional/casual/educational/entertaining)
   - Complexity level (simple/moderate/complex)
   - Target audience
   - Main points covered
   - Language used
   - Estimated speaking duration

4. **Insights**:
   - Short summary (2-3 sentences)
   - Detailed summary (5-7 sentences)
   - Key insights (3-5 bullet points)
   - Recommendations for viewers (2-3 suggestions)
   - Content quality assessment
   - Engagement potential

Please format your response as a valid JSON object with this structure:
{
  "videoInfo": {
    "title": "Video title",
    "channel": "Channel name",
    "duration": "Video duration",
    "publishedDate": "Publication date",
    "viewCount": "View count",
    "likeCount": "Like count",
    "description": "Video description"
  },
  "content": {
    "transcript": "Full transcript text",
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
    "targetAudience": "target audience",
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
}

If you cannot access the video or extract certain information, use "Not available" or appropriate default values. Focus on providing accurate, detailed analysis based on what you can observe from the video.
`;

      const response = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are an expert YouTube video analyst with access to video content. Provide detailed, accurate analysis in the requested JSON format.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 1500
      });

      const analysisText = response.choices[0]?.message?.content;
      if (!analysisText) {
        throw new Error('No response from ChatGPT');
      }

      // Log cost information
      const usage = response.usage;
      if (usage) {
        const inputCost = (usage.prompt_tokens / 1000) * 0.0015; // GPT-3.5-turbo input cost
        const outputCost = (usage.completion_tokens / 1000) * 0.002; // GPT-3.5-turbo output cost
        const totalCost = inputCost + outputCost;
        
        console.log(`API Cost: $${totalCost.toFixed(4)} (Input: ${usage.prompt_tokens} tokens, Output: ${usage.completion_tokens} tokens)`);
      }

      const analysis = this.parseJSONResponse(analysisText);
      return analysis;

    } catch (error) {
      console.error('Error analyzing video with ChatGPT:', error);
      throw new Error('Failed to analyze video with AI');
    }
  }

  private parseJSONResponse(text: string): VideoAnalysis {
    try {
      // Try to extract JSON from the response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      
      // If no JSON found, throw error
      throw new Error('No valid JSON found in response');
    } catch (error) {
      console.error('Error parsing ChatGPT response:', error);
      console.error('Raw response:', text);
      
      // Return fallback response
      return {
        videoInfo: {
          title: 'Unable to analyze video',
          channel: 'Unknown',
          duration: 'Unknown',
          publishedDate: 'Unknown',
          viewCount: '0',
          likeCount: '0',
          description: 'Unable to extract description'
        },
        content: {
          transcript: '',
          wordCount: 0,
          speakingPace: 'Unknown',
          hasTranscript: false
        },
        analysis: {
          summary: 'Unable to analyze content',
          keyTopics: [],
          sentiment: 'neutral',
          tone: 'unknown',
          complexity: 'moderate',
          targetAudience: 'general',
          mainPoints: [],
          language: 'unknown',
          estimatedDuration: 'unknown'
        },
        insights: {
          shortSummary: 'Unable to generate summary',
          detailedSummary: 'Unable to analyze video content',
          keyInsights: [],
          recommendations: [],
          contentQuality: 'Unable to assess',
          engagementPotential: 'Unable to assess'
        }
      };
    }
  }
} 