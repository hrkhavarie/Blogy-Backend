import { Get, Injectable, Post } from '@nestjs/common';

@Injectable()
export class PostsService {

    @Get()
    public findAll(userId){
        return 'This action returns all posts';
    }

    @Post()
    public createPost(){
        return "post created!!"
    }

}
