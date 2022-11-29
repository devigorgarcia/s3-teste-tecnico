export type createClientDTO = {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  createdAT: string;
};

export type updateClientDTO = {
  fullName?: string;
  email?: string;
  phone?: string;
};
