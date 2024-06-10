import { Test, TestingModule } from '@nestjs/testing';
import { BrowsClassController } from './brows-class.controller';
import { BrowsClassService } from './brows-class.service';

describe('BrowsClassController', () => {
  let controller: BrowsClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrowsClassController],
      providers: [BrowsClassService],
    }).compile();

    controller = module.get<BrowsClassController>(BrowsClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
