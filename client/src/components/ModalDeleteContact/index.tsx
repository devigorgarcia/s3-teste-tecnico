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
import { IContact } from "../../contexts/ClientContext";
import { ContactContext } from "../../contexts/ContactContext";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: IContact;
}

export const ModalDeleteContact = ({
  isOpen,
  onClose,
  contact,
}: IModalProps) => {
  const { deleteContact } = useContext(ContactContext);

  const handleDelete = (contact_id: string) => {
    deleteContact(contact_id);
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
            {contact.fullName}
          </Text>{" "}
          ?
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => handleDelete(contact.id)} colorScheme="red">
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
