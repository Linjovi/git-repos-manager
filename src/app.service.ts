import { Injectable } from '@nestjs/common';
import {ReposService} from "./repos/repos.service"

@Injectable()
export class AppService {
  constructor(private readonly reposService: ReposService) {}
  root(query: any): any {
    // console.log(query.root);
    const git = this.reposService.getGlobalGit()
    return {root:query.root,git:git};
  }
}
