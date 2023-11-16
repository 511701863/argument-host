import { Injectable } from '@nestjs/common';
import { CreateTestFilterDto } from './dto/create-test-filter.dto';
import { UpdateTestFilterDto } from './dto/update-test-filter.dto';

@Injectable()
export class TestFilterService {
  create(createTestFilterDto: CreateTestFilterDto) {
    return 'This action adds a new testFilter';
  }

  findAll() {
    return `This action returns all 11111 testFilter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testFilter`;
  }

  update(id: number, updateTestFilterDto: UpdateTestFilterDto) {
    return `This action updates a #${id} testFilter`;
  }

  remove(id: number) {
    return `This action removes a #${id} testFilter`;
  }
}
