import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Keyword {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}