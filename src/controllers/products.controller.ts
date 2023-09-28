import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: '',
    };
  }

  @Get('filter')
  getProductFilter() {
    return {
      message: '',
    };
  }

  @Get(':productId')
  getOne(@Param('productId') productId: string) {
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
