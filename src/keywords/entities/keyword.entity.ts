import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Keyword {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ readOnly: true, type: String, description: "ID du mot-clé" })
  id: string;

  @Column()
  @ApiProperty({ type: String, description: "Nom du mot-clé" })
  name: string;
}