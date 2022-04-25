import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DrumService } from './drum.service';
import { Drum as DrumModel } from '@prisma/client';

@Controller('drum')
export class DrumController {
  constructor(private readonly drumService: DrumService) {}

  @Post()
  async createDrum(@Body() drumData: { name: string }): Promise<DrumModel> {
    return this.drumService.createDrum(drumData);
  }

  @Get()
  async getDrums(): Promise<DrumModel[]> {
    console.log('getDrums');
    return this.drumService.getDrums({});
  }

  @Get(':id')
  async getDrum(@Param('id') id: string): Promise<DrumModel> {
    return this.drumService.getDrum({ id: Number(id) });
  }

  @Put(':id')
  async updateDrum(
    @Param('id') id: number,
    @Body() drumData: { name: string },
  ): Promise<DrumModel> {
    return this.drumService.updateDrum({
      where: { id: Number(id) },
      data: drumData,
    });
  }

  @Delete(':id')
  async deleteDrum(@Param('id') id: number): Promise<DrumModel> {
    return this.drumService.deleteDrum({
      id: Number(id),
    });
  }
}
