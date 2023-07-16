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
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    /* const roles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]); */
    const metaValue = this.reflector.get<string[]>('SomeAnnotedDecorator', context.getHandler());

    const request = context.switchToHttp().getRequest<any>();
    console.log(roles)

    console.log('=======================',this.reflector)
    return request.isAuthenticated();
  }
}