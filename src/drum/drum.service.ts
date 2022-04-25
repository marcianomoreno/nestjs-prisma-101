import { Injectable } from '@nestjs/common';
import { Drum, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DrumService {
  constructor(private prisma: PrismaService) {}

  async createDrum(data: Prisma.DrumCreateInput): Promise<Drum> {
    return this.prisma.drum.create({
      data,
    });
  }

  async getDrums(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DrumWhereUniqueInput,
    where?: Prisma.DrumWhereInput,
    orderBy?: Prisma.DrumOrderByWithRelationInput;
  }): Promise<Drum[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.drum.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async getDrum(
    drumWhereUniqueInput: Prisma.DrumWhereUniqueInput,
  ): Promise<Drum | null> {
    return this.prisma.drum.findUnique({
      where: drumWhereUniqueInput,
    });
  }

  async updateDrum(params: {
    where: Prisma.DrumWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<Drum> {
    const { where, data } = params;
    return this.prisma.drum.update({
      where,
      data,
    });
  }

  async deleteDrum(where: Prisma.DrumWhereUniqueInput): Promise<Drum> {
    return this.prisma.drum.delete({
      where,
    });
  }
}
