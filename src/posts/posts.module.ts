import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { UsersModule } from 'src/users/users.module';
import { PostsService } from './providers/posts.service';
import { AuthService } from 'src/auth/providers/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInProvider } from 'src/auth/providers/sign-in.provider';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { BcryptProvider } from 'src/auth/providers/bcrypt.provider';

@Module({
  imports: [UsersModule ],
  controllers: [PostsController],
  providers: [PostsService, AuthService, PrismaService , 
    SignInProvider ,
    {
      provide: HashingProvider,
      useClass: BcryptProvider
    },
  ]
})
export class PostsModule { }
