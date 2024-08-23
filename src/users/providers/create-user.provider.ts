import { BadRequestException, forwardRef, Inject, Injectable, RequestTimeoutException, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashingProvider } from 'src/auth/providers/hashing.provider';

@Injectable()
export class CreateUserProvider {
    constructor(
        // Injecting prismaService 
        private readonly prismaService: PrismaService,

        // Injecting hashingProvider
        @Inject(forwardRef(() => HashingProvider))
        private readonly hashingProvider: HashingProvider
    ) { }
    async createUser(user: CreateUserDto): Promise<User> {

        /* Check is user exists with same email */
        let existingUser = undefined;
        try {
            existingUser = await this.prismaService.user.findFirstOrThrow({
                where: { email: user.email }
            })
            // console.log(existingUser);
        } catch (error) {
            // throw new RequestTimeoutException('Unable to process your request at the moment please try later.', {
            //     description: 'Error connecting to the database',
            // });

            if(error.code === "p2002"){
                throw new UnprocessableEntityException('Email already exists. ')
              }
        }
        /* Handle exception */
        if (existingUser) {
            throw new BadRequestException(
                'The  user already exist, please check your email.',
            )
        }

        /* Create a new user */
        try {
            return this.prismaService.user.create({
                data: {
                    ...user , 
                     password: await this.hashingProvider.hashPassword(user.password),
                }
            });
            // console.log(user);    

        } catch (error) {
            throw new RequestTimeoutException('Unable to process your request at the moment please try later!', {
                description: 'Error connecting to the database',
            });
        }

    }
}
