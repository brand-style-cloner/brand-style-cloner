import { Router } from 'express';
import { analyzeVideoWithChatGPT } from '../controllers/chatgptController.js';

const router = Router();

// Analyze YouTube video with ChatGPT
router.get('/analyze', analyzeVideoWithChatGPT);

export default router; 