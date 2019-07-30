import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ReposModule } from './repos/repos.module';
import { LoggerMiddleware } from './cats/logger.middleware';
import { SocketModule } from './sockets/sockets.module';

@Module({
  imports: [CatsModule, ReposModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware);
  }
}
