import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  task: string;

  @Column()
  author: string;

  @Column()
  date: string;

  @Column('simple-array')
  keywords: string[];
}