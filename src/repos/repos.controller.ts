import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ReposService } from './repos.service';
@Controller('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Get()
  findAll(@Query() query: any) {
    return this.reposService.findAll(query.path);
  }

  @Get('git')
  getGitInfo() {
    return this.reposService.getGlobalGit();
  }

  @Get('path')
  getPath() {
    return this.reposService.getPath();
  }

  @Post('path')
  setPath(@Body('newPath') newPath: string) {
    return this.reposService.setPath(newPath);
  }

  @Post('run')
  async run(@Body('repos') repos: string[],@Body('operate') operate: string) {
    return this.reposService.run(repos,operate)
  }
}
