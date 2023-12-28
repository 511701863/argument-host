import { Inject, Injectable } from '@nestjs/common';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
function test(){
  return new Promise((res) => {
    setTimeout(() => {
      res(`This action returns use 2000 ms`)
    }, 2000);
  })
}
@Injectable()
export class BbbService {
  @Inject('CONFIG_OPTIONS') private readonly moduleOptions
  create(createBbbDto: CreateBbbDto) {
    return 'This action adds a new bbb';
  }

  async findAll() {
    return await test()
    
  }

  findOne(id: number) {
    return `This action returns a #${id} bbb`;
  }

  update(id: number, updateBbbDto: UpdateBbbDto) {
    return `This action updates a #${id} bbb`;
  }

  remove(id: number) {
    return `This action removes a #${id} bbb`;
  }
}
