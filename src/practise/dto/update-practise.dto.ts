import { PartialType } from '@nestjs/mapped-types';
import { CreatePractiseDto } from './create-practise.dto';

export class UpdatePractiseDto extends PartialType(CreatePractiseDto) {}
