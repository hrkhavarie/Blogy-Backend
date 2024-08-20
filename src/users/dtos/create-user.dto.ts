import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    firstName: string ;
    
    @IsString()
    @IsOptional()
    
    lastName?:string ;

    @IsEmail()
    @IsNotEmpty()
    email: string ;

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

}