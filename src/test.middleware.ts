import { Injectable, NestMiddleware, Inject } from '@nestjs/common';
import { Request, Response } from 'express';
import { BbbService } from './bbb/bbb.service';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  @Inject(BbbService) 
  private readonly bbbService:BbbService;
  use(req: Request, res: Response, next: () => void) {
    console.log('Middleware before',req.method,this.bbbService.findAll());
    console.log('-----------------',this.bbbService.findAll());
    this.bbbService.findAll()
    next();
    console.log('Middleware after');
  }
}
