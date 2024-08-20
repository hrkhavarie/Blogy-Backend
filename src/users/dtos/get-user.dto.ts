import { Type } from "class-transformer";
import { IsIn, IsInt, IsOptional } from "class-validator";

export class GetUsersParamDto{

    @IsOptional()
    @IsInt()
    @Type(()=>Number)
    id?: number;
}