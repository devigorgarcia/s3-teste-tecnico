import { useState } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
import { api } from "../api";

interface IClientContextProps {
  children: ReactNode;
}

export interface IClients {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  createdAT?: string;
}
export interface IUpdateClients {
  id?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  createdAT?: string;
}

export interface IContact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  clientId: string;
}

interface IClientDetail extends IClients {
  contact: IContact[];
}

interface IClientContextData {
  clientsList: IClients[];
  clientDetail: (client_id: string) => void;
  client: IClientDetail;
  registerClient: (data: IClients) => void;
  editClient: (data: IUpdateClients, client_id: string) => void;
  deleteClient: (client_id: string) => void;
}

export const ClientContext = createContext<IClientContextData>(
  {} as IClientContextData
);

export const ClientProvider = ({ children }: IClientContextProps) => {
  const [clientsList, setClientsList] = useState<IClients[]>([] as IClients[]);
  const [client, setClient] = useState<IClientDetail>({} as IClientDetail);

  const listClients = async () => {
    await api
      .get("/clients")
      .then((res) => setClientsList(res.data))
      .catch((err) => console.log(err));
    return clientsList;
  };

  useEffect(() => {
    listClients();
  }, [client]);

  const clientDetail = async (client_id: string) => {
    await api
      .get(`/clients/${client_id}`)
      .then((res) => setClient(res.data))
      .catch((err) => console.log(err));
  };

  const registerClient = async (data: IClients) => {
    await api
      .post("/clients", data)
      .then((resp) => listClients())
      .catch((err) => console.log(err));
  };

  const editClient = async (data: IUpdateClients, client_id: string) => {
    await api
      .patch(`/clients/${client_id}`, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const deleteClient = async (client_id: string) => {
    console.log(client_id);
    await api
      .delete(`/clients/${client_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <ClientContext.Provider
      value={{
        clientsList,
        clientDetail,
        client,
        registerClient,
        editClient,
        deleteClient,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
