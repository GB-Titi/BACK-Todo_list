import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { KeywordsModule } from './keywords/keywords.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { createMongoMemoryConnection } from './mongo-memory-connection.provider';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => {
        const { connection, mongod } = await createMongoMemoryConnection();
        const uri = mongod.getUri();
        return {
          uri,
        };
      },
    }),
    TasksModule,
    KeywordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}