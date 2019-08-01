import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReposModule } from './repos/repos.module';
import { SocketModule } from './sockets/sockets.module';
import { RenderModule } from 'nest-next';

@Module({
  imports: [RenderModule, ReposModule, SocketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
