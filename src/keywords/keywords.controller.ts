import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeywordsService } from './keywords.service';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { UpdateKeywordDto } from './dto/update-keyword.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('keywords')
@Controller('keywords')
export class KeywordsController {
  constructor(private readonly keywordsService: KeywordsService) {}

  @Post()
  @ApiOperation({ summary: 'Ajouter un nouveau mot-clef' })
  @ApiResponse({ status: 201, description: 'Mot-clef créé' })
  create(@Body() createKeywordDto: CreateKeywordDto) {
    return this.keywordsService.create(createKeywordDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les mots-clefs' })
  @ApiResponse({ status: 200, description: 'Liste des mots-clefs' })
  findAll() {
    return this.keywordsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un mot-clef spécifique' })
  @ApiResponse({ status: 200, description: 'Mot-clef trouvé' })
  findOne(@Param('id') id: string) {
    return this.keywordsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un mot-clef' })
  @ApiResponse({ status: 200, description: 'Mot-clef mis à jour' })
  update(@Param('id') id: string, @Body() updateKeywordDto: UpdateKeywordDto) {
    return this.keywordsService.update(+id, updateKeywordDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un mot-clef' })
  @ApiResponse({ status: 204, description: 'Mot-clef supprimé' })
  remove(@Param('id') id: string) {
    return this.keywordsService.remove(+id);
  }
}