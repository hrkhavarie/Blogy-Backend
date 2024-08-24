import { IsEmail, IsString } from "class-validator";

export class GetUserByEmailDto {

    @IsString()
    @IsEmail()
    email: string
}