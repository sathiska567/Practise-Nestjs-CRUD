import { Test, TestingModule } from '@nestjs/testing';
import { AddCreateDetailsController } from './add-create-details.controller';
import { AddCreateDetailsService } from './add-create-details.service';

describe('AddCreateDetailsController', () => {
  let controller: AddCreateDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddCreateDetailsController],
      providers: [AddCreateDetailsService],
    }).compile();

    controller = module.get<AddCreateDetailsController>(AddCreateDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
