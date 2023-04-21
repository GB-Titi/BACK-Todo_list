import { NestFactory } from "@nestjs/core";
import { TestModule } from "./dist/test/tests.module.js";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { createMongoMemoryConnection } from './dist/test/mongo-memory-connection.provider.js';
import * as fs from "fs";
import * as swaggerUiDist from "swagger-ui-dist";
import * as path from "path";


const { connection, mongod } = await createMongoMemoryConnection();
const uri = mongod.getUri();

process.env.NODE_ENV = "gen";
process.env.MONGODB_URI = uri;
const app = await NestFactory.create(TestModule);
const config = new DocumentBuilder()
    .setTitle(process.env.npm_package_name)
    .setDescription("Swagger pour le dev front")
    .addBearerAuth()
    .addBasicAuth()
    .setVersion(process.env.npm_package_version)
    .build();
const document = SwaggerModule.createDocument(app, config);

fs.writeFile("dist/swagger.json", JSON.stringify(document), function (err) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        const swaggerIndexContent = fs.readFileSync(path.join(swaggerUiDist.absolutePath(), "index.html"), "utf8");
        const updatedContent = swaggerIndexContent.replace("https://petstore.swagger.io/v2/swagger.json", "./swagger.json");
        fs.writeFileSync("dist/swagger.html", updatedContent);

        console.log("Swagger files generated.");
        process.exit(0);
    }
});