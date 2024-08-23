import { Module } from '@nestjs/common';
import { MetaOtionsController } from './meta-otions.controller';

@Module({
  controllers: [MetaOtionsController]
})
export class MetaOtionsModule {}
