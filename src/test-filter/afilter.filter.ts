import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AException } from './aException';
import { Response,Request } from 'express';

@Catch(AException)
export class AfilterFilter implements ExceptionFilter {
  catch(exception: AException, host: ArgumentsHost) {
    if(host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      response.status(501).json({
        msg: request.url,
        query:request.query,
        params:request.params,
        code: exception.bbb,
      });
      
    } else if(host.getType() === 'ws') {

    } else if(host.getType() === 'rpc') {

    }
  }
}
