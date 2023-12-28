import { ArgumentMetadata, Injectable, PipeTransform, HttpException,BadRequestException } from '@nestjs/common';

@Injectable()
export class BbbPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value,metadata);
    // throw new HttpException('xxx自定义pip new出的错误',408);
    // throw new BadRequestException('参数不能为空')
    return value
  }
}
