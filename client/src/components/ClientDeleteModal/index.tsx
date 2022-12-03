import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ClientContext, IClients } from "../../contexts/ClientContext";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: IClients;
}

export const ClientDeleteModal = ({ isOpen, onClose, client }: IModalProps) => {
  const { deleteClient } = useContext(ClientContext);

  const handleDelete = (client_id: string) => {
    deleteClient(client_id);
    window.location.reload();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deletar Contato</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Tem certeza que deseja deletar o{" "}
          <Text fontWeight="bolder" color="red" as="span">
            {client.fullName}
          </Text>{" "}
          ?
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => handleDelete(client.id)} colorScheme="red">
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
