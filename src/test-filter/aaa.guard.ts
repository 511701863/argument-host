import { CanActivate, ExecutionContext, Injectable,Inject } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './role';

@Injectable()
export class AaaGuard implements CanActivate {
  @Inject(Reflector) private readonly reflector:Reflector;
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requireRoles = this.reflector.get<Role[]>('roles', context.getHandler())
    console.log(requireRoles,'AaaGuard');
    if (!requireRoles) {
      return true;
    }
    const { user = 1 } = context.switchToHttp().getRequest();
    return requireRoles.some((item)=> user && item === 'admin');
  }
}
