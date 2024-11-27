import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('todo')
@UseGuards(AuthGuard)
export class TodoController {
  @Get('all')
  showAll() {
    return 'all todos';
  }
}
