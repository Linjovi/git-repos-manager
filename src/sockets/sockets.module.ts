import { Module } from '@nestjs/common';
import { SocketGateway } from './sockets.gateway';
import { SocketController } from './sockets.controller';
@Module({
  controllers: [SocketController],
  providers: [SocketGateway],
  exports:[SocketGateway]
})
export class SocketModule {}
