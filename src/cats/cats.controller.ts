import { Controller, Get, Post, Req, Param, Body, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto, ListAllEntities } from './dto';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return this.catService.findAll();
  }

  @Get(':id')
  finsOne(@Param('id') id): string {
    return `this action returns a #${id} cat`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
    return 'this action adds a new cat';
  }
}
