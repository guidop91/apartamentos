import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Apartamento } from '@prisma/client';

@Injectable()
export class ApartmentService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Apartamento[]> {
    return this.prisma.apartamento.findMany({
      include: {
        Amenidades: true,
      },
    });
  }
}
