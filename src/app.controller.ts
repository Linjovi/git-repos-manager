import { Controller, Get, Render, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Index')
  public root(@Query() query:any): string {
    return this.appService.root(query);
  }
}
