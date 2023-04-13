import { MinLength, MaxLength, Matches, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateKeywordDto {
    @ApiProperty({ readOnly: true, type: String, description: "ID du mot-clé" })
    @IsString()
    id: string;
  
    @ApiProperty({ type: String, description: "Nom du mot-clé" })
    @IsString()
    @Matches(/^\b[a-zA-Z0-9_]+\b$/, {
      message: "Attention, un seul mot est autorisé",
    })
    @MinLength(2, {
      message: "Le mot doit faire au moins deux caractères.",
    })
    @MaxLength(15, {
      message: "Le mot doit faire au maximum 15 caractères.",
    })
    name: string;
  }