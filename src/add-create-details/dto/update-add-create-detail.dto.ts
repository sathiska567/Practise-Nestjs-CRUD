import { PartialType } from '@nestjs/mapped-types';
import { CreateAddCreateDetailDto } from './create-add-create-detail.dto';

export class UpdateAddCreateDetailDto extends PartialType(CreateAddCreateDetailDto) {}
