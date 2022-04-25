import { Test, TestingModule } from '@nestjs/testing';
import { DrumService } from './drum.service';

describe('DrumService', () => {
  let service: DrumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrumService],
    }).compile();

    service = module.get<DrumService>(DrumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
