import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('request');
    next();
  }
}
