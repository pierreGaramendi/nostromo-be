import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { CORS } from './constants';
import { HttpExceptionFilter } from './exception/http.filter';
import 'reflect-metadata';
import * as passport from 'passport'
import { initSession } from './auth/session.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  app.use(initSession)
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors(CORS);
  app.use(passport.initialize())
  app.use(passport.session())
  const port = configService.get('PORT')
  app.setGlobalPrefix('api')
  await app.listen(port);
}
bootstrap();
