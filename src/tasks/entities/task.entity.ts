import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({ type: String, description: 'Titre de la tâche' })
  title: string;

  @ApiProperty({ type: String, description: 'Description de la tâche' })
  task: string;

  @ApiProperty({ type: String, description: 'Auteur de la tâche' })
  author: string;

  @ApiProperty({ type: String, format: 'date', description: 'Date de création de la tâche' })
  date: string;

  @ApiProperty({ type: [String], description: 'Mots-clefs associés à la tâche' })
  keywords: string[];
}

@Schema()
export class Task extends Document {
  @Prop()
  title: string;

  @Prop()
  task: string;

  @Prop()
  author: string;

  @Prop()
  date: string;

  @Prop([String])
  keywords: string[];
}

export const TaskSchema = SchemaFactory.createForClass(Task);