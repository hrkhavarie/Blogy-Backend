import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-user.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
    constructor(
        //Inject the auth service in to usersService
        @Inject(forwardRef(()=> AuthService ))
        private readonly authService : AuthService){}

    public findAll(
        getUsersParamDto:GetUsersParamDto,
        limit: number ,
        page:number
    
    ){

        const isAuth = this.authService.isAuth();
        console.log(isAuth);
        return [
            {
                firstName: 'hamid',
                email: 'hamid@hami.com'
            }
        ]
    }

    // find user by ID'
    public findOneById(id:number){

        return{
            id:1234,
            firstName: 'Alice',
            email: 'alice@gmailc.com'
        }

    }

    getUsers(): string {
        return "this is list of users"
    }

    createUser():string {
        return " user created"
    }

    patchUser():string {
        return "user patched"

    }

}
