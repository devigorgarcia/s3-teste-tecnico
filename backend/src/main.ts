import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Api Agenda')
    .setDescription(
      'Uma api para cadastro de clientes e contatos, onde o cliente pode cadastarar seus contatos, assim podendo acessa-los',
    )
    .setVersion('1.0')
    .addTag('clients', 'contacts')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
