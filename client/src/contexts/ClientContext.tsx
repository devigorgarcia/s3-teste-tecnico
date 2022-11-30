import { useState } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
import { api } from "../api";

interface IClientContextProps {
  children: ReactNode;
}

interface IClients {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
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
}

export const ClientContext = createContext<IClientContextData>(
  {} as IClientContextData
);

export const ClientProvider = ({ children }: IClientContextProps) => {
  const [clientsList, setClientsList] = useState<IClients[]>([] as IClients[]);
  const [client, setClient] = useState<IClientDetail>({} as IClientDetail);

  const listClients = async () => {
    await api.get("/clients").then((res) => setClientsList(res.data));
    return clientsList;
  };

  useEffect(() => {
    listClients();
  }, [client]);

  const clientDetail = async (client_id: string) => {
    await api.get(`/clients/${client_id}`).then((res) => setClient(res.data));
  };

  const registerClient = async (data: IClients) => {
    await api.post("/clients", data).then((resp) => console.log(resp));
  };

  return (
    <ClientContext.Provider
      value={{ clientsList, clientDetail, client, registerClient }}
    >
      {children}
    </ClientContext.Provider>
  );
};
