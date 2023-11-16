import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  Query,
  UseGuards
} from '@nestjs/common';
import { TestFilterService } from './test-filter.service';
import { CreateTestFilterDto } from './dto/create-test-filter.dto';
import { UpdateTestFilterDto } from './dto/update-test-filter.dto';
import { AfilterFilter } from './afilter.filter';
import { AException } from './aException';
import { AaaGuard } from './aaa.guard';
import { Roles } from './role.decorator';
import { Role } from './role';
import { TotalDecorator } from './total.decorator';

@Controller('test-filter')
export class TestFilterController {
  constructor(private readonly testFilterService: TestFilterService) {}

  @Post()
  create(@Body() createTestFilterDto: CreateTestFilterDto) {
    return this.testFilterService.create(createTestFilterDto);
  }

  @Get('findAll')
  @UseFilters(AfilterFilter)
  @UseGuards(AaaGuard)
  @Roles(Role.admin)
  findAll() {
    throw new AException('错误','1111')
    return this.testFilterService.findAll();
  }

  @TotalDecorator()
  findOne(@Param('id') id: string) {
    throw new AException('错误','2222')
    return this.testFilterService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestFilterDto: UpdateTestFilterDto,
  ) {
    return this.testFilterService.update(+id, updateTestFilterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testFilterService.remove(+id);
  }
}
