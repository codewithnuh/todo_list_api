import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
// import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    UsersModule,
    PrismaModule,
    JwtModule.register({
      secret: '2uy23uy4u23y4u32yui4y23ui4yu32iy432i4uy3', // Replace with your actual secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [AuthService, JwtService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
