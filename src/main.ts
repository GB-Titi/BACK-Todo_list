import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Task } from './tasks/entities/task.entity';
import { Keyword } from './keywords/entities/keyword.entity';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure Swagger
  const config = new DocumentBuilder()
    .setTitle('To-do List API')
    .setDescription('The To-do List API description')
    .setVersion('1.0')
    .addTag('tasks')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [Task, Keyword]
  });
  SwaggerModule.setup('api', app, document);

  // Save Swagger document as YAML
  const yamlDocument = yaml.dump(document);
  fs.writeFileSync('./dist/swagger.yaml', yamlDocument, 'utf8');

  await app.listen(3000);
}
bootstrap();