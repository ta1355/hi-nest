import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 정의된 속성만 허용
      forbidNonWhitelisted: true, // DTO에 정의되지 않은 속성이 들어오면 에러 발생
      transform: true, // url parameter로 넘어온 값은 자동으로 타입 변환
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
