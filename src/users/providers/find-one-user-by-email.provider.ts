import { Inject, Injectable, RequestTimeoutException, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FindOneUserByEmailProvider {

    constructor(
        //inject PrismaService
        @Inject()
        private readonly prismaService: PrismaService,


    ) { }


    public async findOneByEmail(email: string) {

        let user: User | undefined;
        try {
            // null if user is not found
            user = await this.prismaService.user.findUnique({
                where: {
                    email
                }
            })

        } catch (error) {
            throw new RequestTimeoutException(error, {
                description: 'Could not fetch the user',
            })
        }

        if (!user) {
            throw new UnauthorizedException('User dose not exist!')
        }
        return user;

    }
}
