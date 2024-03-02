import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `product = ${limit} offset => ${offset} brand => ${brand}`;
  }

  @Get('/filter')
  getProductFilter() {
    return 'yo soy filter';
  }
  @Get('/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
