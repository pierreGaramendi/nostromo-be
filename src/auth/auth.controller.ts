import { Body, Controller, Get, Post, Request, Session, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomAuthGuard } from './custome.guard';

@Controller('auth')
export class AuthController {
    constructor(
      private authService: AuthService
    ) { }

    @Post('signup')
    async verify(@Body('email') email: string, @Body('password') password: string) {
        return await this.authService.verify(email, password)
    }

    @UseGuards(CustomAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return req.user
    }
}
