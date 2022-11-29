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
import { createContactDTO, updateContactDTO } from './contacts.dto';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() data: createContactDTO) {
    return this.contactsService.create(data);
  }

  @Get()
  async listContacts() {
    return this.contactsService.listContacts();
  }

  @Get(':contact_id')
  async listContact(@Param('contact_id') contact_id: string) {
    return this.contactsService.listContact(contact_id);
  }

  @Patch(':contact_id')
  async updateContact(
    @Param('contact_id') contact_id: string,
    @Body() data: updateContactDTO,
  ) {
    return this.contactsService.updateContact(data, contact_id);
  }

  @Delete(':contact_id')
  @HttpCode(204)
  async deleteContact(@Param('contact_id') contact_id: string) {
    return this.contactsService.deleteContact(contact_id);
  }
}
