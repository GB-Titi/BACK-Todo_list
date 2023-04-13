import { Module } from '@nestjs/common';
import { TasksModule } from '../src/tasks/tasks.module';
import { KeywordsModule } from '../src/keywords/keywords.module';
import { AppService } from '../src/app.service';
import { AppController } from '../src/app.controller';
import { MongooseModule } from '@nestjs/mongoose';
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
export class TestModule {}