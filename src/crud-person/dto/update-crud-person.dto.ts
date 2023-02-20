import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudPersonDto } from './create-crud-person.dto';

export class UpdateCrudPersonDto extends PartialType(CreateCrudPersonDto) {}
