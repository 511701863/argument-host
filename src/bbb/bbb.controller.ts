import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ParseIntPipe, HttpException, ParseFloatPipe, Query,DefaultValuePipe, UseFilters, ValidationPipe } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { BbbInterceptor } from './bbb.interceptor';
import { BbbInterceptorMap } from './bbb.interceptorMap';
import { BbbInterceptorTap } from './bbb.interceptorTap';
import { BbbPipePipe } from './bbb-pipe.pipe';
import { BBBFilter } from './bbb.filter';

@Controller('bbb')
export class BbbController {
  constructor(private readonly bbbService: BbbService) {}

  @Post()
  @UseFilters(BBBFilter)
  create(@Body(new ValidationPipe()) obj: CreateBbbDto) {
    console.log(obj);
    
    return this.bbbService.create(obj);
  }

  @UseInterceptors(BbbInterceptor)
  @UseInterceptors(BbbInterceptorMap)
  @UseFilters(BBBFilter)
  @Get()
  async findAll(@Query('arg', new DefaultValuePipe('123')) arg:any,@Query('arg2',new BbbPipePipe(),new ParseIntPipe()) arg2:number) {
    console.log(arg,'arggg');
    const res = await this.bbbService.findAll()
    return res + arg + arg2;
  }

  @UseInterceptors(BbbInterceptorTap)
  @Get(':id')
  findOne(@Param('id',new ParseFloatPipe({
    exceptionFactory(error) {
        throw new HttpException('xxx'+error,408)
    },
  })) cd: string) {
    return this.bbbService.findOne(+cd);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBbbDto: UpdateBbbDto) {
    return this.bbbService.update(+id, updateBbbDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bbbService.remove(+id);
  }
}
