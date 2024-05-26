import { Test, TestingModule } from '@nestjs/testing';
import { PractiseService } from './practise.service';

describe('PractiseService', () => {
  let service: PractiseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PractiseService],
    }).compile();

    service = module.get<PractiseService>(PractiseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
