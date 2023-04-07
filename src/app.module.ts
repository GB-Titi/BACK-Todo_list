import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/entities/task.entity';
import { Keyword } from './keywords/entities/keyword.entity';
import { TasksModule } from './tasks/tasks.module';
import { KeywordsModule } from './keywords/keywords.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://admin:Admin123@todo-db.j1hqlaj.mongodb.net/?retryWrites=true&w=majority',
      database: 'todo-db',
      entities: [Task, Keyword],
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TasksModule,
    KeywordsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}