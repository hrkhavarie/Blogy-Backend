import { BadRequestException, forwardRef, Inject, Injectable, RequestTimeoutException, UnprocessableEntityException } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-user.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserProvider } from './create-user.provider';

@Injectable()
export class UsersService {
    constructor(
        //Injecting usersService
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,

        //Injecting PrismaService
        @Inject(forwardRef(() => PrismaService))
        private readonly prismaService: PrismaService,

        // Injecting createUserProvider
        private readonly createUserProvider:CreateUserProvider
    
    ) {}

            

    public findAll(
        getUsersParamDto: GetUsersParamDto,
        limit: number,
        page: number

    ) {

        const isAuth = this.authService.isAuth();
        // console.log(isAuth);
        return [
            {
                firstName: 'hamid',
                email: 'hamid@hami.com'
            }
        ]
    }

    // find user by ID'
    public findOneById(id: number) {

        return {
            id: 1234,
            firstName: 'Alice',
            email: 'alice@gmailc.com'
        }

    }

    getUsers(): string {
        return "this is list of users"
    }

    async createUser(user: CreateUserDto) {
        return this.createUserProvider.createUser(user);
    }


    patchUser(): string {
        return "user patched"

    }

}
