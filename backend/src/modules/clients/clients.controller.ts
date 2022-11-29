import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { createClientDTO } from './client.dto';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() data: createClientDTO) {
    return this.clientsService.create(data);
  }
}
