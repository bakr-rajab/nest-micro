import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';
const PORT=process.env.PORT || 3002
async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  app.setGlobalPrefix('bills');
  await app.listen(PORT, () => {
    console.log('bills listening on ',PORT);
  });
}
bootstrap();
