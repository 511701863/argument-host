import { PartialType } from '@nestjs/mapped-types';
import { CreateTestFilterDto } from './create-test-filter.dto';

export class UpdateTestFilterDto extends PartialType(CreateTestFilterDto) {}
