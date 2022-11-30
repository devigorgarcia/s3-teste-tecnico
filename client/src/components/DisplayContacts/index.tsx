import {
  Button,
  Divider,
  Flex,
  Heading,
  Select,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

import { useContext, useState } from "react";
import { ClientContext } from "../../contexts/ClientContext";
import { ContactCad } from "../ContactsCard";

export const DisplayContacts = () => {
  const { clientDetail, client } = useContext(ClientContext);

  const { clientsList } = useContext(ClientContext);
  const [clientId, setClientId] = useState("");

  const handleDisplay = (clientId: string) => {
    clientDetail(clientId);
  };

  console.log();

  return (
    <Flex flexDir="column" gap="5" alignItems="center" justifyContent="center">
      <Heading>Mostrar Contatos</Heading>
      <Select
        w="100%"
        maxW="400px"
        onChange={(e) => setClientId(e.target.value)}
      >
        <option value="">Selecione o cliente</option>
        {clientsList?.map((client) => (
          <option key={client.id} value={client.id}>
            {client.fullName}
          </option>
        ))}
      </Select>
      <Button onClick={() => handleDisplay(clientId)} colorScheme="orange">
        Mostrar
      </Button>
      <Divider />
      {client.fullName && (
        <Flex flexDir="column" align="center" gap={4}>
          <Flex flexDir='column'>
            <Heading as="h2" size="lg">
              Cliente: {client.fullName}
            </Heading>
            <Flex>
              <Button>Editar Cliente</Button>
              <Button>Deletar Cliente</Button>
            </Flex>
          </Flex>
          <Flex>
            <Text>
              <strong>email:</strong> {client.email}
            </Text>
            <Divider />
            <Text>
              <strong>Telefone:</strong> {client.phone}
            </Text>
            <Divider />
            <Text width="100%">
              <strong>Desde:</strong> {client.createdAT?.split("T")[0]}
            </Text>
          </Flex>
          <TableContainer>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th textAlign="center">Nome</Th>
                  <Th textAlign="center">Email</Th>
                  <Th textAlign="center">Telefone</Th>
                  <Th textAlign="center">Editar</Th>
                  <Th textAlign="center">Apagar</Th>
                </Tr>
              </Thead>
              <Tbody>
                {client.contact.map((contact) => (
                  <ContactCad key={contact.id} contact={contact} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      )}
    </Flex>
  );
};
