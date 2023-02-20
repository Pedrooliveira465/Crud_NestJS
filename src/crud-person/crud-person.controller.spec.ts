import { Test, TestingModule } from '@nestjs/testing';
import { CrudPersonController } from './crud-person.controller';
import { CrudPersonService } from './crud-person.service';

describe('CrudPersonController', () => {
  let controller: CrudPersonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudPersonController],
      providers: [CrudPersonService],
    }).compile();

    controller = module.get<CrudPersonController>(CrudPersonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
