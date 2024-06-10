import { PartialType } from '@nestjs/mapped-types';
import { CreateBrowsClassDto } from './create-brows-class.dto';

export class UpdateBrowsClassDto extends PartialType(CreateBrowsClassDto) {}
