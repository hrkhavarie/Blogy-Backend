import { IsArray, IsEAN, IsEnum, isISO8601, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, minLength, ValidateNested } from "class-validator";
import { CreatePostMetaOptionDto } from "./create-post-meta-option.dto";
import { Transform, Type } from "class-transformer";
import { postStatus, postType } from "@prisma/client";

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
export class CreatePostDto {

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

    @IsEnum(postStatus)
    @IsNotEmpty()
    status: postStatus;

    @IsString()
    @IsOptional()
    content: string;

    @IsString()
    // @IsJSON()
    @IsOptional()
    schema: string;

    @IsUrl()
    @IsOptional()
    featuredImageUrl: string;


    // @IsOptional()
    // // @Transform(({ value }) => new Date(value))
    // // @Type(() => Date)
    // @IsISO8601({ strict: true, strictSeparator: true })
    // @Transform(({ value }) => {
    //   const isValidDate = isISO8601(value, { strict: true, strictSeparator: true });
    //   if (!isValidDate) {
    //     throw new Error(`Property "from_date" should be a valid ISO8601 date string`);
    //   }
    //   return new Date(value);
    // })
    // publishOn: Date ;


    //nested Dto
    @IsOptional()
    @IsArray()
    tags: string[]

    // @IsArray()
    // @ValidateNested({ each: true })
    //  @Type(()=>CreatePostMetaOptionDto)
    @IsOptional()
    @IsString()
    metaOptions: string;
}
