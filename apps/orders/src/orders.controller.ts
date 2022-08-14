import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get("all")
  getHello(): string {
    return "this.ordersService.getHello()";
  }
}
