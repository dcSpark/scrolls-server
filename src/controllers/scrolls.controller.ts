import { NextFunction, Request, Response } from 'express';
import { createClient } from '@redis/client';

console.log('Connected to redis');

const redisClient = createClient({ url: `${process.env.REDIS_URL}:6379` });

console.log('Redis URL:', process.env.REDIS_URL);

console.log('Connected to redis 55');
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
      const handle = req.query.handle.toString();
      console.log('Querying handle:', handle);
      const cursor = await redisClient.get('_cursor');
      console.log('Cursor:', cursor);
      const address = await redisClient.get(req.query.handle.toString());
      console.log('Address retrieved:', address);
      res.status(200).send({ address });
    } catch (error) {
      console.log('REDIS ERROR:', error);
      next(error);
    }
  };
}

export default ScrollsController;
