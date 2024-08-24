import { forwardRef, Inject, Injectable, RequestTimeoutException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/sign-in.dto';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class SignInProvider {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly userService: UsersService,

        private readonly hashingProvider: HashingProvider,
    ) { }

       public async login (signInDto: SignInDto){
       
        //Find the user using email ID        
          let  user = await this.userService.findOneByEmail(signInDto.email);
      
        // Compare password to the hash

        let isEqual: Boolean = false;
        try {
            isEqual = await this.hashingProvider.comparePassword(
                signInDto.password,
                user.password,
            )

        } catch (error) {
            throw new RequestTimeoutException(error, {
                description: "Password dose not match"
            })
        }

        if(!isEqual){
            throw new UnauthorizedException('Incorrect Password')
        }
        
        //Send confirmation
        return true;
    }
}


