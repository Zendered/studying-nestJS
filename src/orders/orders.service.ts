import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from '@prisma/client';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from './prisma.service';

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
