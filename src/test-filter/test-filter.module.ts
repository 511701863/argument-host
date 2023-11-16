import { Module } from '@nestjs/common';
import { TestFilterService } from './test-filter.service';
import { TestFilterController } from './test-filter.controller';

@Module({
  controllers: [TestFilterController],
  providers: [TestFilterService],
  exports: [TestFilterService],
})
export class TestFilterModule {}
