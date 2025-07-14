import { Request, Response } from 'express';
import { ChatGPTService } from '../services/chatgptService.js';

export const analyzeVideoWithChatGPT = async (req: Request, res: Response) => {
  try {
    const { videoUrl } = req.query;

    if (!videoUrl || typeof videoUrl !== 'string') {
      return res.status(400).json({
        error: 'Video URL is required as a query parameter'
      });
    }

    // Validate YouTube URL
    if (!videoUrl.includes('youtube.com') && !videoUrl.includes('youtu.be')) {
      return res.status(400).json({
        error: 'Please provide a valid YouTube URL'
      });
    }

    console.log('Analyzing video with ChatGPT:', videoUrl);
    
    const chatgptService = new ChatGPTService();
    const analysis = await chatgptService.analyzeYouTubeVideo(videoUrl);

    res.json({
      success: true,
      videoUrl,
      analysis,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error analyzing video with ChatGPT:', error);
    
    res.status(500).json({
      error: 'Failed to analyze video with ChatGPT',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}; 