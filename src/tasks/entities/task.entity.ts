import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ readOnly: true, type: String, description: 'ID de la tâche' })
  id: string;

  @Column()
  @ApiProperty({ type: String, description: 'Titre de la tâche' })
  title: string;

  @Column()
  @ApiProperty({ type: String, description: 'Description de la tâche' })
  task: string;

  @Column()
  @ApiProperty({ type: String, description: 'Auteur de la tâche' })
  author: string;

  @Column()
  @ApiProperty({ type: String, format: 'date', description: 'Date de création de la tâche' })
  date: string;

  @Column('simple-array')
  @ApiProperty({ type: [String], description: 'Mots-clefs associés à la tâche' })
  keywords: string[];
}