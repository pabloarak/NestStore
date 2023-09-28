import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: '',
    };
  }

  @Get('filter')
  getBrandFilter() {
    return {
      message: '',
    };
  }

  @Get(':brandId')
  getOne(@Param('brandId') brandId: string) {
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
