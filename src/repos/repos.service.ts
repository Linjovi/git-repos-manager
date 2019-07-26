import { Injectable } from '@nestjs/common';
import * as ini from 'ini';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

@Injectable()
export class ReposService {
  // private readonly repos: any[] = [];

  findAll(): any[] {
    var repos = [];
    const rootPath = '/Users/jovi/Netease';
    let dirList = fs.readdirSync(rootPath);
    dirList.forEach(item => {
      var filedir = path.join(rootPath, item);
      if (fs.statSync(filedir).isDirectory()) {
        if (fs.readdirSync(filedir).indexOf('.git') != -1) {
          const gitPath = path.join(filedir, '.git', 'config');
          const gitInfo = this.getGitInfo(gitPath);
          repos.push({name:item,gitInfo});
        }
      }
    });

    return repos;
  }

  getGitInfo(proPath: string) {
    let proInfo = ini.parse(fs.readFileSync(proPath).toString());
    return proInfo;
  }

  getGlobalGit() {
    const proPath = path.join(os.homedir(), '.gitconfig');
    let proInfo = ini.parse(fs.readFileSync(proPath).toString());
    return proInfo;
  }
}
