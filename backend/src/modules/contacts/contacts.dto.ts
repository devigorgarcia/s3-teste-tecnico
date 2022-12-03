import { ApiProperty } from '@nestjs/swagger';

export class createContactDTO {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  clientId: string;
}

export class updateContactDTO {
  @ApiProperty()
  id?: string;
  @ApiProperty()
  fullName?: string;
  @ApiProperty()
  email?: string;
  @ApiProperty()
  phone?: string;
  @ApiProperty()
  clientId?: string;
}
