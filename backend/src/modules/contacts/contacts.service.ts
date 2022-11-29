import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createContactDTO, updateContactDTO } from './contacts.dto';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(data: createContactDTO) {
    const client = await this.prisma.client.findUnique({
      where: {
        id: data.clientId,
      },
    });

    if (!client) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    const contact = await this.prisma.contact.create({ data });

    return contact;
  }

  async listContacts() {
    const contacts = await this.prisma.contact.findMany({
      include: {
        client: true,
      },
    });

    return contacts;
  }

  async listContact(contact_id: string) {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id: contact_id,
      },
      include: {
        client: true,
      },
    });

    if (!contact) {
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    }

    return contact;
  }

  async updateContact(data: updateContactDTO, contact_id: string) {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id: contact_id,
      },
    });

    if (!contact) {
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    }
    if (data.clientId) {
      const client = await this.prisma.client.findUnique({
        where: {
          id: data.clientId,
        },
      });
      if (!client) {
        throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
      }
    }

    const updateContact = await this.prisma.contact.update({
      data,
      where: {
        id: contact_id,
      },
    });

    return updateContact;
  }

  async deleteContact(contact_id: string) {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id: contact_id,
      },
    });

    if (!contact) {
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.contact.delete({
      where: {
        id: contact_id,
      },
    });
  }
}
