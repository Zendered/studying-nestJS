import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import {
  CreateOrderDto,
  UpdateOrderDto,
} from '../src/domain/contracts/gateways';
import { PrismaService } from '../src/domain/usecases/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order | null> {
    return await this.prisma.order.create({
      data: {
        amount: createOrderDto.amount,
      },
    });
  }

  async findAll() {
    return await this.prisma.order.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.order.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: { id },
      data: { amount: updateOrderDto.amount },
    });
  }

  async remove(id: string) {
    return await this.prisma.order.delete({
      where: { id },
    });
  }
}
