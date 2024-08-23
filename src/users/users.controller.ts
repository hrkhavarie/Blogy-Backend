import { Body, Controller, DefaultValuePipe, Get, Headers, Ip, Param, ParseIntPipe, Patch, Post, Query , Req, ValidationPipe} from '@nestjs/common';
import { UsersService } from './providers/users.service';
import { request } from 'http';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import {ApiOperation, ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger'

@Controller('users')
@ApiTags('Users')
export class UsersController {
    //inject the userService in to user controller
    constructor(private readonly userService:UsersService){}
    @Get("/:id?")
    @ApiOperation({
        summary: "Fetches a list of registered users on the application", 
    })
    @ApiResponse({
        status: 200,
        description: "Users fetched successfully based on the query"
    })
    @ApiQuery({
        name: 'limit' , 
        type: 'number', 
        required: false , 
        description: "The Number of entries returned  per query",
        example: 10 , 
    })
    @ApiQuery({
        name: 'page' , 
        type: 'number', 
        required: false , 
        description: "The position of the page number",
        example: 3 , 
    })
    getUsers(
        @Param() getUsersParamDto: GetUsersParamDto ,
        @Query('limit' , new DefaultValuePipe(10) ,  ParseIntPipe) limit:number , 
        @Query('page', new DefaultValuePipe(2) ,  ParseIntPipe) page:number , 
    ) {
        
        return this.userService.findAll(getUsersParamDto , limit, page);
    }
    @Post() 
    async createUser(
        @Body() createUserDto:CreateUserDto,) {     
          return this.userService.createUser(createUserDto)
    }


    @Patch()
    patchUser(@Body() patchUserDto:PatchUserDto){
         
        return patchUserDto;
        // return this.userService.patchUser();
    }
}
