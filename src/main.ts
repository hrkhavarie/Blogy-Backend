import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder , SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
      forbidNonWhitelisted:true,
    }),
  );

  //swagger configuration 
  const config = new DocumentBuilder()
  .setTitle('Nestjs - Blog app API')
  .setDescription('Use the Base API URL as http://localhost:3003/api')
  .setTermsOfService('http://localhost:3003/term-of-serivce')
  .setLicense('MIT License', 'https://github.com/hrkhavarie')
  .addServer('http://localhost:3003')
  .setVersion('1.0').build();

  // Instantiate  Document
  const document = SwaggerModule.createDocument(app , config);
  SwaggerModule.setup('api', app, document)
  await app.listen(3003);
}
bootstrap();
