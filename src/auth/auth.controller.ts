import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { SignInDto } from './dtos/sign-in.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {


    //injecting auth service
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    public async signIn(@Body() signInDto:SignInDto){
        return   this.authService.signIn(signInDto);
    }

    @Get()
    getUser(){
        return "this is user"
    }

}
