import {  MinLength, MaxLength, IsString, IsNotEmpty, IsArray, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
    message: "Il faut au minimum trois caractères pour le titre."
  })
  @MaxLength(30, {
    message: "Il faut au maximum 30 caractères pour le titre."
  })
  @ApiProperty({ type: String, description: 'Titre de la tâche' })
  title: string;

  @IsString()
  @MaxLength(9999, {
    message: "Votre tâche est beaucoup trop longue. Seulement 9999 caractères sont autorisés."
  })
  @ApiProperty({ type: String, description: 'Description de la tâche' })
  task: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(120, {
    message: "L'auteur à 120 caractères maximum autorisés."
  })
  @ApiProperty({ type: String, description: 'Auteur de la tâche' })
  author: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ type: String, format: 'date', description: 'Date de création de la tâche' })
  date: string;

  @IsArray()
  @ApiProperty({ type: [String], description: 'Mots-clefs associés à la tâche' })
  keywords: string[];
}