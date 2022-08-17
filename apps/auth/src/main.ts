import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
const PORT=process.env.PORT || 3001
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.setGlobalPrefix('api');
  await app.listen(PORT, () => console.log('auth app listening on port ',PORT));
}
bootstrap();
