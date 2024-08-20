import { Body, Controller, DefaultValuePipe, Get, Headers, Ip, Param, ParseIntPipe, Patch, Post, Query , Req, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { request } from 'http';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    @Get("/:id?")
    getUsers(
        @Param() getUsersParamDto: GetUsersParamDto,
        @Query('limit' , new DefaultValuePipe(10) ,  ParseIntPipe) limit:number , 
        @Query('page', new DefaultValuePipe(2) ,  ParseIntPipe) page:number , 
    ) {
        console.log(limit);
        console.log(page);
        return this.userService.getUsers();
    }
    @Post() 
    // createUser(@Req() request:Request) {
    createUser(
        @Body() createUserDto:CreateUserDto,
        // @Headers() headers:any , 
        // @Ip() ip:any
    ) {
        console.log(createUserDto);
        // console.log(headers);
        // console.log(ip);
       return this.userService.createUser()
    }


    @Patch()
    patchUser(@Body() patchUserDto:PatchUserDto){
         
        return patchUserDto;
        // return this.userService.patchUser();
    }
}
