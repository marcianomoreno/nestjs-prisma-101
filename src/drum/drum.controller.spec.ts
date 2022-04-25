import { Test, TestingModule } from '@nestjs/testing';
import { DrumController } from './drum.controller';

describe('DrumController', () => {
  let controller: DrumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrumController],
    }).compile();

    controller = module.get<DrumController>(DrumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
