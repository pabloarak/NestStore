import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: '',
    };
  }

  @Get('filter')
  getOrderFilter() {
    return {
      message: '',
    };
  }

  @Get(':orderId')
  getOne(@Param('orderId') orderId: string) {
    return {
      message: '',
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
