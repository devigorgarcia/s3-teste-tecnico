import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { createClientDTO, updateClientDTO } from './client.dto';
import { ClientsService } from './clients.service';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ description: 'Client registration' })
  @ApiBody({ type: createClientDTO })
  async create(@Body() data: createClientDTO) {
    return this.clientsService.create(data);
  }

  @Get()
  @ApiCreatedResponse({ description: 'List all Clients' })
  async listClients() {
    return this.clientsService.listClients();
  }

  @Get(':client_id')
  @ApiCreatedResponse({ description: 'List one clients' })
  async listClient(@Param('client_id') client_id: string) {
    return this.clientsService.listClient(client_id);
  }

  @Patch(':client_id')
  @ApiCreatedResponse({ description: 'update one client' })
  async updateClient(
    @Param('client_id') client_id: string,
    @Body() data: updateClientDTO,
  ) {
    return this.clientsService.updateClient(data, client_id);
  }

  @Delete(':client_id')
  @ApiCreatedResponse({ description: 'delete a client' })
  @HttpCode(204)
  async deleteClient(@Param('client_id') client_id: string) {
    return this.clientsService.deleteClient(client_id);
  }
}
