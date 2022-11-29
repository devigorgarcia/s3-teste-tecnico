import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { createContactDTO } from './contacts.dto';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() data: createContactDTO) {
    return this.contactsService.create(data);
  }
}
