import { postType } from "../enums/postType.enum";
import { postStatue } from "../enums/postStatue.enum";
import { IsArray, IsEAN, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, minLength, ValidateNested } from "class-validator";
import { CreatePostMetaOptionDto } from "./create-post-meta-option.dto";
import { Type } from "class-transformer";

 /** 
    * Structure of request body to create a new post
    * title: string 
    * postType: enum (post , page , stroy , series)
    * slug: string
    * status: enum( draft , scheduled , review , published )
    * content? : string
    * schema?: string
    * featuredImageUrl?: string
    * publishOn: Date , 
    * tags: string[]
    * metaOptions: [{key:'some key' , value: 'some value'}]
    
    */
export class CreatePostDto{
    
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    title: string;

    @IsEnum(postType)
    @IsNotEmpty()
    postType: postType

    @IsString()
    @IsNotEmpty()
    // @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$]/, {
    //     message: 'A slug should be all small letters and use only "-" and  whithout spaces. for example "my-url"'
    // })
    slug: string;

    @IsEnum(postStatue)
    @IsNotEmpty()
    status: postStatue;

    @IsString()
    @IsOptional()
    content? : string;

    @IsString()
    // @IsJSON()
    schema?: string;

    @IsUrl()
    @IsOptional()
    featuredImageUrl?: string;

    // @IsISO8601()
    @IsOptional()
    publishOn: Date ;

    @IsOptional()
    @IsArray()   
    @IsString({each:true})
    @MinLength(3, {each:true})

    //nested Dto
    @IsOptional()
    tags: string[];
    @IsArray()
    @ValidateNested({ each: true })
    @Type(()=>CreatePostMetaOptionDto)
    metaOptions: CreatePostMetaOptionDto[];
}
