import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { IClients } from "../../contexts/ClientContext";
import { ClientEditForm } from "../ClientEditForm";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  client: IClients;
}

export const EditClientModal = ({ isOpen, onClose, client }: IModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Cliente</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ClientEditForm client={client} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
