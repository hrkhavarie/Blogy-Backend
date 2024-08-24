import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/providers/users.service';
import { UsersController } from './users/users.controller';
import { PostsModule } from './posts/posts.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { PostsService } from './posts/providers/posts.service';
import { PrismaModule } from './prisma/prisma.module';
import { TagsModule } from './tags/tags.module';
import { TagsService } from './tags/providers/tags.service';
import { MetaOtionsModule } from './meta-otions/meta-otions.module';
import { PrismaService } from './prisma/prisma.service';
import { CreateUserProvider } from './users/providers/create-user.provider';
import { FindOneUserByEmailProvider } from './users/providers/find-one-user-by-email.provider';
import { AuthService } from './auth/providers/auth.service';
import { SignInProvider } from './auth/providers/sign-in.provider';
import { HashingProvider } from './auth/providers/hashing.provider';
import { BcryptProvider } from './auth/providers/bcrypt.provider';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from './auth/config/jwt.config';

@Module({
  imports: [
    UsersModule, 
    PostsModule, 
    AuthModule, 
    PrismaModule, 
    TagsModule, 
    MetaOtionsModule,
    ConfigModule.forFeature(jwtConfig),

    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  controllers: [AppController, UsersController, AuthController],
  providers: [
    AppService, 
    UsersService, 
    PostsService, 
    TagsService, 
    PrismaService, 
    CreateUserProvider, 
    FindOneUserByEmailProvider, 
    AuthService, 
    SignInProvider,
    JwtService, 

  ]
})
export class AppModule { }
