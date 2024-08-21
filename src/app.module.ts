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

@Module({
  imports: [UsersModule, PostsModule, AuthModule],
  controllers: [AppController , UsersController, AuthController],
  providers: [AppService , UsersService , PostsService ],
})
export class AppModule {}
