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
  useDisclosure,
} from "@chakra-ui/react";

import { useContext, useState, useEffect } from "react";
import { ClientContext } from "../../contexts/ClientContext";
import { ClientDeleteModal } from "../ClientDeleteModal";
import { EditClientModal } from "../ClientEditModal";
import { ContactCad } from "../ContactsCard";

export const DisplayContacts = () => {
  const { clientDetail, client } = useContext(ClientContext);

  const { clientsList } = useContext(ClientContext);
  const [clientId, setClientId] = useState("");

  const handleDisplay = (clientId: string) => {
    clientDetail(clientId);
  };

  useEffect(() => {
    if (clientsList.length !== 0) {
      handleDisplay(clientId);
    }
  }, [client]);

  const {
    isOpen: editIsOpen,
    onOpen: editOnOpen,
    onClose: editOnClose,
  } = useDisclosure();
  const {
    isOpen: deleteIsOpen,
    onOpen: deleteOnOpen,
    onClose: deleteOnClose,
  } = useDisclosure();

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
          <Flex flexDir="column">
            <Heading as="h2" size="lg" textAlign="center">
              {client.fullName}
            </Heading>
            <Flex justifyContent="center" gap="8" mt="4">
              <Button size="sm" onClick={editOnOpen}>
                Editar Cliente
              </Button>
              <Button size="sm" colorScheme="red" onClick={deleteOnOpen}>
                Deletar Cliente
              </Button>
            </Flex>
          </Flex>
          <Flex
            flexDir={["column", "row"]}
            mt="5"
            gap={["2", "10"]}
            justifyContent="center"
            alignItems={["center"]}
            width="100%"
          >
            <Text>
              <strong>email:</strong> {client.email}
            </Text>

            <Text>
              <strong>Telefone:</strong> {client.phone}
            </Text>

            <Text>
              <strong>Desde:</strong> {client.createdAT?.split("T")[0]}
            </Text>
          </Flex>
          <Divider />
          <Heading as="h3" size="md">
            Contatos
          </Heading>
          <TableContainer w={["100vw"]} maxW="1200px">
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th textAlign="center">Nome</Th>
                  <Th textAlign="center">Email</Th>
                  <Th textAlign="center">Telefone</Th>
                  <Th textAlign="center">Funções</Th>
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
      <EditClientModal
        isOpen={editIsOpen}
        onClose={editOnClose}
        client={client}
      />
      <ClientDeleteModal
        isOpen={deleteIsOpen}
        onClose={deleteOnClose}
        client={client}
      />
    </Flex>
  );
};
