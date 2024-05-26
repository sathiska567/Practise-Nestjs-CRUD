import { Test, TestingModule } from '@nestjs/testing';
import { PractiseController } from './practise.controller';

describe('PractiseController', () => {
  let controller: PractiseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PractiseController],
    }).compile();

    controller = module.get<PractiseController>(PractiseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
