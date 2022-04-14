import { Module } from '@nestjs/common';
import { OrdersModule } from './domain/modules/orders.module';

@Module({
  imports: [OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
