import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response,Request } from 'express';

@Catch()
export class BBBFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    if(host.getType() === 'http') {
      console.log('ExceptionFilter');
      
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      response.status(501).json({
        url: request.url,
        query:request.query,
        params:request.params,
        body:request.body,
        msg: exception?.getResponse?.().message ?? exception + '(500)',
      });
      
    } else if(host.getType() === 'ws') {

    } else if(host.getType() === 'rpc') {

    }
  }
}
