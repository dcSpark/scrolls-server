import { NextFunction, Request, Response } from 'express';
import { createClient } from '@redis/client';

console.log('Connected to redis');

const redisClient = createClient({ url: `${process.env.REDIS_URL}:6379` });

console.log('Redis URL:', process.env.REDIS_URL);

console.log('Connected to redis.');
class ScrollsController {
  public addressByAdaHandle = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (!redisClient.isOpen) {
        await redisClient.connect();
      }

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      try {
      } catch (e) {
        console.log('ERROR: ', e);
      }
      const handleParam = req.query.handle;

      if (!handleParam) {
        res.status(400).send({ error: 'Invalid query param' });
      }
      const handle = req.query.handle.toString();

      const address = await redisClient.get(handle);

      res.status(200).send({ address });
    } catch (error) {
      console.log('REDIS ERROR:', error);
      next(error);
    }
  };
}

export default ScrollsController;
