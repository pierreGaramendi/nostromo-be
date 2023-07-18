import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { Reflector } from '@nestjs/core';

@Injectable()
export class CustomAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    const result =(await super.canActivate(context)) as boolean
    const request = context.switchToHttp().getRequest();
    await super.logIn(request)
    return result;
  }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<any>();
    return request.isAuthenticated();
  }
}