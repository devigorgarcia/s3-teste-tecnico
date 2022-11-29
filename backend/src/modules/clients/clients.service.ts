import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createClientDTO, updateClientDTO } from './client.dto';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(data: createClientDTO) {
    const client = await this.prisma.client.findUnique({
      where: {
        email: data.email,
      },
    });

    if (client) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const newClient = await this.prisma.client.create({ data });

    return newClient;
  }

  async listClients() {
    const clients = await this.prisma.client.findMany({
      include: {
        contact: true,
      },
    });

    return clients;
  }

  async listClient(client_id: string) {
    const client = await this.prisma.client.findUnique({
      where: {
        id: client_id,
      },
      include: {
        contact: true,
      },
    });

    if (!client) {
      throw new HttpException('client not found', HttpStatus.NOT_FOUND);
    }

    return client;
  }

  async updateClient(data: updateClientDTO, client_id: string) {
    const client = await this.prisma.client.findUnique({
      where: {
        id: client_id,
      },
    });
    if (!client) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    const updatedClient = await this.prisma.client.update({
      data,
      where: {
        id: client_id,
      },
    });

    return updatedClient;
  }

  async deleteClient(client_id: string) {
    const client = await this.prisma.client.findUnique({
      where: {
        id: client_id,
      },
    });

    if (!client) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    await this.prisma.client.delete({
      where: {
        id: client_id,
      },
    });
  }
}
