import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy'
import { PassportModule } from '@nestjs/passport';
import { CustomerMongooseInitializer } from 'src/constants/mongoose.initializer';
import { SessionSerializer } from './sessionSerializer';

@Module({
  imports: [
    PassportModule.register({ session: true }),
    CustomerMongooseInitializer
  ],
  providers: [
    AuthService, 
    LocalStrategy, 
    SessionSerializer
  ],
  controllers: [AuthController]
})
export class AuthModule { }
