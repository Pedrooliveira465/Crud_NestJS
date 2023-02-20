import { Test, TestingModule } from '@nestjs/testing';
import { CrudPersonService } from './crud-person.service';

describe('CrudPersonService', () => {
  let service: CrudPersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudPersonService],
    }).compile();

    service = module.get<CrudPersonService>(CrudPersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
