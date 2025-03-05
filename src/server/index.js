import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { createClient } from 'redis';
import { v4 as uuidv4 } from 'uuid';
import winston from 'winston';
import { DataPipeline } from '../pipeline/dataPipeline.js';
import { AlertSystem } from '../monitoring/alertSystem.js';

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Initialize Redis client
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', (err) => logger.error('Redis Client Error', err));

// Initialize Express app
const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Initialize core components
const dataPipeline = new DataPipeline(redisClient, logger);
const alertSystem = new AlertSystem(logger);

// Middleware
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// WebSocket connection handling
wss.on('connection', async (ws, req) => {
  const connectionId = uuidv4();
  logger.info(`New connection established: ${connectionId}`);

  try {
    ws.on('message', async (data) => {
      try {
        const message = JSON.parse(data);
        
        // Process data
        await dataPipeline.processData(message);
        
        // Check for alerts
        const alerts = await alertSystem.checkAlerts(message);
        if (alerts.length > 0) {
          alerts.forEach(alert => {
            logger.info('Alert generated:', alert);
            ws.send(JSON.stringify({ type: 'alert', data: alert }));
          });
        }
      } catch (error) {
        logger.error('Error processing message:', error);
        ws.send(JSON.stringify({ type: 'error', message: 'Error processing message' }));
      }
    });

    ws.on('close', () => {
      logger.info(`Connection closed: ${connectionId}`);
    });
  } catch (error) {
    logger.error('Error in connection handling:', error);
  }
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

export default server;