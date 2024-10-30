import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ApartmentModule } from './apartments/apartments.module';

@Module({
  imports: [ApartmentModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
