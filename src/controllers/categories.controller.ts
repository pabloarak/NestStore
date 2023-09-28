import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getCategories(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: '',
    };
  }

  @Get('filter')
  getCategoryFilter() {
    return {
      message: '',
    };
  }

  @Get(':categoryId')
  getOne(@Param('categoryId') categoryId: string) {
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

  @Get(':id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return '';
  }
}
