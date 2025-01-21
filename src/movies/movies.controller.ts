import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return one moive ${id}`;
  }

  @Post()
  create() {
    return `This will create a movie`;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This movie will delete a moive ${id}`;
  }

  @Put('/:id')
  update(@Param('id') id: string) {
    return `This movie will update a moive ${id}`;
  }
}
