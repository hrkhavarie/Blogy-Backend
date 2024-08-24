import { forwardRef, Inject, Injectable,  } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/sign-in.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindOneUserByEmailProvider } from 'src/users/providers/find-one-user-by-email.provider';
import { SignInProvider } from './sign-in.provider';

@Injectable()
export class AuthService {
    constructor(
        // Injecting userService 
        @Inject(forwardRef(() => SignInProvider))
        private readonly signInProvider : SignInProvider ,
    ) {}

    public async signIn(signInDto: SignInDto) {
        
       return  await this.signInProvider.login(signInDto);
      
    }

}
