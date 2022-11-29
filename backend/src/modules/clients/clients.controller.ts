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
import { createClientDTO, updateClientDTO } from './client.dto';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() data: createClientDTO) {
    return this.clientsService.create(data);
  }

  @Get()
  async listClients() {
    return this.clientsService.listClients();
  }

  @Get(':client_id')
  async listClient(@Param('client_id') client_id: string) {
    return this.clientsService.listClient(client_id);
  }

  @Patch(':client_id')
  async updateClient(
    @Param('client_id') client_id: string,
    @Body() data: updateClientDTO,
  ) {
    return this.clientsService.updateClient(data, client_id);
  }

  @Delete(':client_id')
  @HttpCode(204)
  async deleteClient(@Param('client_id') client_id: string) {
    return this.clientsService.deleteClient(client_id);
  }
}
