import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { BbbService } from './bbb.service';

@Injectable()
export class BbbInterceptorTap implements NestInterceptor {
  constructor(private bbbService: BbbService) { }

  private readonly logger = new Logger(BbbInterceptorTap.name)

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(
        async (data) => {
        const res = await this.bbbService.findAll()
        this.logger.log('log xxx',data,res)
        }
      )
    );
  }
}
