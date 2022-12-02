import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const PORT = process.env.PORT || 3030;

    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT, () => {
      console.log('SERVER LISTEN TO PORT-->>' + PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
