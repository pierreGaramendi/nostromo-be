import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy'
import { PassportModule } from '@nestjs/passport';
import { CustomerMongooseInitializer } from 'src/constants/mongoose.initializer';

@Module({
  imports: [
    PassportModule,
    CustomerMongooseInitializer
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
