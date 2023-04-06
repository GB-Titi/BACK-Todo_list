import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/entities/task.entity';
import { Keyword } from './keywords/entities/keyword.entity';
import { TasksModule } from './tasks/tasks.module';
import { KeywordsModule } from './keywords/keywords.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'Admin123',
      database: 'todo-db',
      entities: [Task, Keyword],
      synchronize: true,
    }),
    TasksModule,
    KeywordsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
