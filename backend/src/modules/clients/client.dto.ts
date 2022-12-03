import { ApiProperty } from '@nestjs/swagger';

export class createClientDTO {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  createdAT: string;
}

export class updateClientDTO {
  @ApiProperty()
  fullName?: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  phone?: string;
}
