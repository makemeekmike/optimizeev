import { format } from 'date-fns';

export class DataPipeline {
  constructor(redisClient, logger) {
    this.redisClient = redisClient;
    this.logger = logger;
  }

  async processData(data) {
    try {
      // Validate data
      this.validateData(data);

      // Store time-series data
      await this.storeTimeSeriesData(data);

      // Process metrics
      await this.processMetrics(data);

      return true;
    } catch (error) {
      this.logger.error('Error processing data:', error);
      throw error;
    }
  }

  validateData(data) {
    // Add data validation logic
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid data format');
    }
  }

  async storeTimeSeriesData(data) {
    const timestamp = format(new Date(), 'yyyy-MM-dd:HH:mm:ss');
    const key = `metrics:${data.stationId}:${timestamp}`;
    
    await this.redisClient.hSet(key, {
      ...data,
      timestamp
    });
    
    // Set expiration for data retention
    await this.redisClient.expire(key, 60 * 60 * 24 * 30); // 30 days
  }

  async processMetrics(data) {
    // Add metric processing logic
    const metrics = {
      timestamp: new Date().toISOString(),
      stationId: data.stationId,
      // Add calculated metrics
    };

    await this.redisClient.xAdd(
      'metrics_stream',
      '*',
      metrics
    );
  }
}