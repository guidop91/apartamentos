import { Module } from '@nestjs/common';
import { ApartmentService } from './apartments.service';
import { PrismaService } from './prisma.service';
import { ApartmentController } from './apartment.controller';

@Module({
  imports: [],
  controllers: [ApartmentController],
  providers: [ApartmentService, PrismaService],
})
export class ApartmentModule {}
