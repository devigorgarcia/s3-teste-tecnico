import { useState } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
import { api } from "../api";

interface IClientContextProps {
  children: ReactNode;
}

interface IClients {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAT: string;
}

interface IClientContextData {
  clientsList: IClients[];
}

export const ClientContext = createContext<IClientContextData>(
  {} as IClientContextData
);

export const ClientProvider = ({ children }: IClientContextProps) => {
  const [clientsList, setClientsList] = useState<IClients[]>([] as IClients[]);

  const listClients = async () => {
    await api.get("/clients").then((res) => setClientsList(res.data));
    return clientsList;
  };

  useEffect(() => {
    listClients();
  }, []);

  return (
    <ClientContext.Provider value={{ clientsList }}>
      {children}
    </ClientContext.Provider>
  );
};
