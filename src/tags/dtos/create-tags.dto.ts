// create.tags.dto.ts
import { PartialType } from '@nestjs/mapped-types';

import { IsString, IsOptional, IsUrl, IsNotEmpty } from 'class-validator';

export class CreateTagsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  schema: string;

  @IsOptional()
  @IsUrl()
  featuredImageUrl: string;

  
  createdDate: Date
  updatedAt: Date
  deletedAt: Date
}