import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const appOptions = {cors: true};
  const app = await NestFactory.create(AppModule,appOptions);
  app.setGlobalPrefix('api');
  // app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(3000);
}
bootstrap();
