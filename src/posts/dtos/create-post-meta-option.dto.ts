import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostMetaOptionDto{
    @IsString()
    @IsNotEmpty()
    key:string;

    @IsNotEmpty()
    value: any
}