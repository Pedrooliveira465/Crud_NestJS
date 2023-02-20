import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrudPersonService } from './crud-person.service';
import { CreateCrudPersonDto } from './dto/create-crud-person.dto';
import { UpdateCrudPersonDto } from './dto/update-crud-person.dto';

@Controller('crud-person')
export class CrudPersonController {
  constructor(private readonly crudPersonService: CrudPersonService) {}

  @Post()
  create(@Body() createCrudPersonDto: CreateCrudPersonDto) {
    return this.crudPersonService.create(createCrudPersonDto);
  }

  @Get()
  findAll() {
    return this.crudPersonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudPersonService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrudPersonDto: UpdateCrudPersonDto) {
    return this.crudPersonService.update(+id, updateCrudPersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudPersonService.remove(+id);
  }
}
