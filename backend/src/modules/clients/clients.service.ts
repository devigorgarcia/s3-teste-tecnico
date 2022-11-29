import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createClientDTO } from './client.dto';

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
}
