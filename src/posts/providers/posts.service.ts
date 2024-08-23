import { forwardRef, Get, Inject, Injectable, Post } from '@nestjs/common';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';


@Injectable()
export class PostsService {

    constructor(
        @Inject(forwardRef(() => PrismaService))
        private readonly prismaService: PrismaService
    ) { }

    @Get()
    public findAll(userId) {
        return 'This action returns all posts';
    }

    @Post()
    async createPost(data: CreatePostDto) {


        return this.prismaService.post.create({
            data: {
                ...data,
            }
        })
        console.log(data);
        // try {

        // } catch (error) {
        //     console.log(error);
        //     throw error; 
        // }

    }

}
