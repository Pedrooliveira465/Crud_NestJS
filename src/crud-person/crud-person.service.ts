import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCrudPersonDto } from './dto/create-crud-person.dto';
import { UpdateCrudPersonDto } from './dto/update-crud-person.dto';
import { CrudPerson } from './entities/crud-person.entity';

@Injectable()
export class CrudPersonService {
  constructor(@InjectRepository(CrudPerson) private readonly crudPersonRepository: Repository<CrudPerson>) {}
  
// Create
  async create(createCrudPersonDto: CreateCrudPersonDto) {
    const crudPersonCreate = this.crudPersonRepository.create({
      ...createCrudPersonDto,
    });
    return this.crudPersonRepository.save(crudPersonCreate);
  }

  async findAll() {
    return this.crudPersonRepository.find();
  }

  async findOne(id: string): Promise<CrudPerson> {
    const personOne = await this.crudPersonRepository.findOne({where: {id: parseInt(id, 10)}}); 
    
    if (!personOne) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return personOne;

  }

  async update(id: number, updateCrudPersonDto: UpdateCrudPersonDto) {
    const crudPersonUpdate = await this.crudPersonRepository.create({
      id: id,
      ...updateCrudPersonDto,
    });

    if (!crudPersonUpdate) {
      throw new NotFoundException(`Course ID ${id} not found`);
  }

    return this.crudPersonRepository.save(crudPersonUpdate);

  }

  async remove(id: number) {
    const crudPersonRemove = await this.crudPersonRepository.findOne({where: {id}}); 
    
    if (!crudPersonRemove) {
      throw new NotFoundException(`Course ID ${id} not found`);
    }

    return this.crudPersonRepository.remove(crudPersonRemove);

  }
  
}
