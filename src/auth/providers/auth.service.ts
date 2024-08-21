import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
    //Injecting userService 
    @Inject(forwardRef(()=> UsersService))
        private readonly userService:UsersService){

    }

    public login(email: string , password: string , id: string){

        //check if the user exist in database 
        const user = this.userService.findOneById(123);
        //login
        return 'SAMPLE_TOKEN'

        // token

    }

    public isAuth(){
        return true;
    }        
}
