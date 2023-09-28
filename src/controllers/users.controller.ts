import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: '',
    };
  }

  @Get('filter')
  getUserFilter() {
    return {
      message: '',
    };
  }

  @Get(':userId')
  getOne(@Param('userId') userId: string) {
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
