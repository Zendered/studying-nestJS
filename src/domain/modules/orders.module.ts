import { Module } from '@nestjs/common';
import { OrdersService } from '../usecases/orders.service';
import { OrdersController } from '../../application/controllers/orders.controller';
import { PrismaService } from '../usecases/prisma.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
})
export class OrdersModule {}
