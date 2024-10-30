import { Controller, Get } from '@nestjs/common';
import { ApartmentService } from './apartments.service';
import { Apartamento as ApartmentModel } from '@prisma/client';

@Controller()
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Get('apartments')
  async getAllApartments(): Promise<ApartmentModel[]> {
    return this.apartmentService.getAll();
  }
}
