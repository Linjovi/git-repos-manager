import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Client, Server } from 'socket.io';
import * as fs from 'fs';
import * as path from 'path';
import * as shell from 'shelljs';
import {Operator} from "./dto/operator.dto"

var currentPath = process.cwd(); //当前目录
let repoPath = path.join(currentPath, '.mrgx.config.json');

@WebSocketGateway(4000)
export class SocketGateway {
  @WebSocketServer()
  server!: Server;

  @SubscribeMessage('operator')
  async operator(client: Client, data: Operator): Promise<any> {
    let repo = this.getRepo();
    repo.projects = data.repos.map((item:string) => {
      return { path: path.join(repo.path, item) };
    });
    fs.writeFileSync(repoPath, JSON.stringify(repo));

    let command = ""
    if(data.opera.includes("checkout") || data.opera.includes("clone")){
      command = `mrgx -q ${data.opera} -q`
    }else{
      command = `mrgx -q ${data.opera}`
    }
    var child = shell.exec(command, { async: true });
    (child.stdout as any).on('data', (data:string) => {
      this.server.emit('out', data);
    });
    (child.stderr as any).on('data', (data:string) => {
      this.server.emit('err', data);
    });
    child.on('close', code => {
      this.server.emit('close', code);
    });

    return `mrgx ${data.opera}`;
  }

  initRepo() {
    if (!fs.existsSync(repoPath)) {
      fs.writeFileSync(repoPath, '{"path":"/","projects":[]}');
    }
  }

  getRepo() {
    this.initRepo();
    return JSON.parse(fs.readFileSync(repoPath).toString());
  }
}
