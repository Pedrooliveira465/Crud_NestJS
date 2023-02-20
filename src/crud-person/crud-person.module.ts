import { Module } from '@nestjs/common';
import { CrudPersonService } from './crud-person.service';
import { CrudPersonController } from './crud-person.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CrudPerson } from './entities/crud-person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CrudPerson])],
  controllers: [CrudPersonController],
  providers: [CrudPersonService]
})
export class CrudPersonModule {}
