import { Test, TestingModule } from '@nestjs/testing';
import { AddCreateDetailsService } from './add-create-details.service';

describe('AddCreateDetailsService', () => {
  let service: AddCreateDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddCreateDetailsService],
    }).compile();

    service = module.get<AddCreateDetailsService>(AddCreateDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
