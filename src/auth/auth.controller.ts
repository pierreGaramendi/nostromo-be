import { Body, Controller, Get, Post, Request, Session, UseGuards } from '@nestjs/common';
import { AuthService, IUser } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    async verify(@Body('email') email: string, @Body('password') password: string) {
        return await this.authService.verify(email, password)
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return req.user
    }

    @Get('')
    async getAuthSession(@Session() session: Record<string, any>) {
        console.log(session)
    }
}
