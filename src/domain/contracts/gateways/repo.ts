import { Order } from '@prisma/client';

export interface IRepository {
  create(req: string): Promise<string>;
  findAll(): Promise<Order[]>;
  findOne(): Promise<Order>;
  update(): Promise<Order>;
  remove(): Promise<Order>;
}
