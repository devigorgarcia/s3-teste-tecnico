export type createClientDTO = {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  createdAT: string;
};

export type updateClientDTO = {
  id?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  createdAT?: string;
};
