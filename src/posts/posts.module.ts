import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { UsersModule } from 'src/users/users.module';
import { PostsService } from './providers/posts.service';
import { AuthService } from 'src/auth/providers/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInProvider } from 'src/auth/providers/sign-in.provider';
import { HashingProvider } from 'src/auth/providers/hashing.provider';
import { BcryptProvider } from 'src/auth/providers/bcrypt.provider';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'src/auth/config/jwt.config';

@Module({
  imports: [
    UsersModule, 
    ConfigModule,
    ConfigModule.forFeature(jwtConfig),

    JwtModule.registerAsync(jwtConfig.asProvider()),

    ],
  controllers: [PostsController],
  providers: [PostsService, AuthService, PrismaService , JwtService ,
    SignInProvider ,
    {
      provide: HashingProvider,
      useClass: BcryptProvider
    },
  ]
})
export class PostsModule { }
