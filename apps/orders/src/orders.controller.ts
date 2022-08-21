import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

@Post("create")
create(@Body() req: any){
  return this.ordersService.create(req);
}

@Post("transfer")
transfer(@Body() req: any){
  return this.ordersService.transferPoints(req);
}

  @Get("all")
  getHello(): string {
    return "this.ordersService.getHello()";
  }
}
