import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3030;

    const app = await NestFactory.create(AppModule);

    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () => {
      console.log('SERVER LISTEN TO PORT-->>' + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
