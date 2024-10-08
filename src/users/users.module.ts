import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreateUserProvider } from './providers/create-user.provider';
import { FindOneUserByEmailProvider } from './providers/find-one-user-by-email.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, CreateUserProvider, FindOneUserByEmailProvider],
  exports: [UsersService],
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => PrismaModule)
  ]
})
export class UsersModule { }
