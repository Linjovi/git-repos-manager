import { Injectable } from '@nestjs/common';
import * as ini from 'ini';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import {Repo} from "./interface/repo"

var currentPath = process.cwd(); //当前目录
let repoPath = path.join(currentPath, '.mrgx.config.json');
@Injectable()
export class ReposService {

  findAll(rootPath: string): Repo[] {
    var repos:Repo[] = [];
    rootPath = rootPath || '/';
    try {
      let dirList = fs.readdirSync(rootPath);

      dirList.forEach(item => {
        var filedir = path.join(rootPath, item);
        if (fs.statSync(filedir).isDirectory()) {
          if (fs.readdirSync(filedir).indexOf('.git') != -1) {
            const gitPath = path.join(filedir, '.git', 'config');
            const gitInfo = this.getGitInfo(gitPath);
            repos.push({ name: item, gitInfo });
          }
        }
      });
      return repos;
    } catch (err) {
      return [];
    }
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

  initRepo() {
    if (!fs.existsSync(repoPath)) {
      fs.writeFileSync(repoPath, '{"path":"/","projects":[]}');
    }
  }

  getRepo(){
    this.initRepo()
    return JSON.parse(fs.readFileSync(repoPath).toString())
  }

  getPath() {
    
    return this.getRepo().path;
  }

  setPath(newPath: string) {
    let repo = this.getRepo()
    repo.path = newPath
    return fs.writeFileSync(repoPath, JSON.stringify(repo));
  }

}
