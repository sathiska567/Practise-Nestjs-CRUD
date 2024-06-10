import { Test, TestingModule } from '@nestjs/testing';
import { BrowsClassService } from './brows-class.service';

describe('BrowsClassService', () => {
  let service: BrowsClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrowsClassService],
    }).compile();

    service = module.get<BrowsClassService>(BrowsClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
