import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

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
