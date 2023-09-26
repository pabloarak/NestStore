import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return '';
  }

  @Get('filter')
  getProductFilter() {
    return '';
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return '';
  }
}
