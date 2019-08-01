import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReposModule } from './repos/repos.module';
import { SocketModule } from './sockets/sockets.module';

@Module({
  imports: [ReposModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
