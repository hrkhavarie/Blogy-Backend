import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { UsersModule } from 'src/users/users.module';
import { PostsService } from './providers/posts.service';
import { AuthService } from 'src/auth/providers/auth.service';

@Module({
  imports: [UsersModule],
  controllers: [PostsController],
  providers: [PostsService, AuthService]
})
export class PostsModule {}
