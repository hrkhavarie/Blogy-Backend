import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [forwardRef(()=> UsersModule)],
  controllers: [AuthController],
  providers: [AuthService] , 
  exports: [AuthService] , 

})
export class AuthModule {}
