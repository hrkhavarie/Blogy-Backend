import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { HashingProvider } from './providers/hashing.provider';
import { BcryptProvider } from './providers/bcrypt.provider';
import { SignInProvider } from './providers/sign-in.provider';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOneUserByEmailProvider } from 'src/users/providers/find-one-user-by-email.provider';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt.config';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
   ],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: HashingProvider,
      useClass: BcryptProvider
    },
    SignInProvider ,
    PrismaService , 
    FindOneUserByEmailProvider 
  ],
  exports: [AuthService, HashingProvider],

})
export class AuthModule { }
