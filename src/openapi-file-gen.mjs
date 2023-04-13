import { NestFactory } from "@nestjs/core";
import { AppModule } from "./dist/src/app.module.js";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { createMongoMemoryConnection } from '../test/mongo-memory-connection.provider';
import * as fs from "fs";

 
const { connection, mongod } = await createMongoMemoryConnection();
const uri = mongod.getUri();

process.env.NODE_ENV = "gen";
process.env.MONGODB_URI = uri;
const app = await NestFactory.create(AppModule);
const config = new DocumentBuilder()
  .setTitle(process.env.npm_package_name)
  .setDescription("Swagger pour le dev front")
  .addBearerAuth()
  .addBasicAuth()
  .setVersion(process.env.npm_package_version)
  .build();
const document = SwaggerModule.createDocument(app, config);

 

fs.writeFile("dist/swagger.json", JSON.stringify(document), function(err) {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    process.exit(0);
  }
});