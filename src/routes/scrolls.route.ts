import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import ScrollsController from '@/controllers/scrolls.controller';

class ScrollsRoute implements Routes {
  public path = '/scrolls';
  public router = Router();
  public scrollsController = new ScrollsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}addressByAdaHandle`, validationMiddleware('query'), this.scrollsController.addressByAdaHandle);
  }
}

export default ScrollsRoute;
