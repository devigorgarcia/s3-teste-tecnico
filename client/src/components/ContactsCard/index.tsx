import { Button, Td, Tr, useDisclosure } from "@chakra-ui/react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IContact } from "../../contexts/ClientContext";
import { EditContactModal } from "../EditContactModal";
import { ModalDeleteContact } from "../ModalDeleteContact";

interface IContactCard {
  contact: IContact;
}

export const ContactCad = ({ contact }: IContactCard) => {
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
    <>
      <Tr key={contact.id}>
        <Td textAlign="center">{contact.fullName}</Td>
        <Td textAlign="center">{contact.email}</Td>
        <Td textAlign="center">{contact.phone}</Td>
        <Td textAlign="center" display="flex" flexDir={["column", "row"]} align='center' justifyContent='center'>
          <Button onClick={editOnOpen}>
            <AiFillEdit size="25px" />
          </Button>
          <Button onClick={deleteOnOpen}>
            <AiFillDelete size="25px" />
          </Button>
        </Td>
      </Tr>
      <EditContactModal
        isOpen={editIsOpen}
        onClose={editOnClose}
        contact={contact}
      />
      <ModalDeleteContact
        isOpen={deleteIsOpen}
        onClose={deleteOnClose}
        contact={contact}
      />
    </>
  );
};
