import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
const PORT=process.env.PORT ||3008;
async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  app.setGlobalPrefix('orders');
  await app.listen(PORT, () => {
    console.log('orders listening on %S',process.env.PORT);
  });
}
bootstrap();
