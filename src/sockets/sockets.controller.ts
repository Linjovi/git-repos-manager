import { Controller, Get, Body } from '@nestjs/common';
import { SocketGateway } from './sockets.gateway';
@Controller('socket')
export class SocketController {
  constructor(private readonly eventsGateway: SocketGateway) {}
  @Get()
  async socket(
    @Body('repos') repos: string[],
    @Body('operate') operate: string,
  ) {
    let server = this.eventsGateway.server;
    let socket = server.sockets;
    // console.log(socket)
  }
}
