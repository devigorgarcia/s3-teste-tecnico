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
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { createContactDTO, updateContactDTO } from './contacts.dto';
import { ContactsService } from './contacts.service';

@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({ description: 'Ceate a contact' })
  async create(@Body() data: createContactDTO) {
    return this.contactsService.create(data);
  }

  @Get()
  @ApiCreatedResponse({ description: 'List all contacts' })
  async listContacts() {
    return this.contactsService.listContacts();
  }

  @Get(':contact_id')
  @ApiCreatedResponse({ description: 'List one contact' })
  async listContact(@Param('contact_id') contact_id: string) {
    return this.contactsService.listContact(contact_id);
  }

  @Patch(':contact_id')
  @ApiCreatedResponse({ description: 'update one contact' })
  async updateContact(
    @Param('contact_id') contact_id: string,
    @Body() data: updateContactDTO,
  ) {
    return this.contactsService.updateContact(data, contact_id);
  }

  @Delete(':contact_id')
  @ApiCreatedResponse({ description: 'Delete one contact' })
  @HttpCode(204)
  async deleteContact(@Param('contact_id') contact_id: string) {
    return this.contactsService.deleteContact(contact_id);
  }
}
