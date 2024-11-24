import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerModule } from './service/controller/controller.module';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [ControllerModule, AuthModule, UserModule, TodoModule],
  controllers: [AppController, UserController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
