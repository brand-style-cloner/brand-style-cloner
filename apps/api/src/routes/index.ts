import { Router } from 'express';
import youtubeRoutes from './youtube.js';

const router = Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'api'
  });
});

// API routes
router.get('/hello', (req, res) => {
  res.json({ 
    message: 'Hello from API!',
    timestamp: new Date().toISOString()
  });
});

// Mount YouTube analysis routes
router.use('/youtube', youtubeRoutes);

export default router; 