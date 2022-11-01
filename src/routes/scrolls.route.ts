import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import ScrollsController from '@/controllers/scrolls.controller';

class ScrollsRoute implements Routes {
  public path = '/';
  public router = Router();
  public scrollsController = new ScrollsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}addressByAdaHandle`, this.scrollsController.addressByAdaHandle);
    this.router.get(`${this.path}latestBlock`, this.scrollsController.latestBlock);
  }
}

export default ScrollsRoute;
