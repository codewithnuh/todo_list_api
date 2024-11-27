/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/auth.controller';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [AuthModule, UserModule, TodoModule, PrismaModule, UsersModule],
  controllers: [AppController, UserController, TodoController, AuthController],
  providers: [AppService, TodoService, JwtService, AuthService],
})
export class AppModule {}
