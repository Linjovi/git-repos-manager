import { Controller, Get } from '@nestjs/common';
import { ReposService } from './repos.service';
@Controller('repos')
export class ReposController {
  constructor(private readonly reposService: ReposService) {}

  @Get()
  findAll() {
    return this.reposService.findAll();
  }

  @Get('git')
  getGitInfo() {
    return this.reposService.getGlobalGit();
  }

}
