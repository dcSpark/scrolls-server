import { NextFunction, Request, Response } from 'express';
import { createClient } from '@redis/client';

class ScrollsController {
  public addressByAdaHandle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log('Connected to redis');

      const redisClient = createClient({ url: process.env.REDIS_URL });
      console.log('Connected to redis 55');

      //   const address = await redisClient.get(req.query.handle.toString());
      //   res.send(address);
      res.sendStatus(200);
    } catch (error) {
      console.log('REDIS ERROR:', error);
      next(error);
    }
  };
}

export default ScrollsController;
