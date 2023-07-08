import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CORS } from './constants';
import { HttpExceptionFilter } from './exception/http.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors(CORS);
  const port = configService.get('PORT')
  app.setGlobalPrefix('api')
  await app.listen(port);
}
bootstrap();
