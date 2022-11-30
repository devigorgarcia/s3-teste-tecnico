import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ClientContext, IContact } from "../../contexts/ClientContext";
import { ContactContext } from "../../contexts/ContactContext";

export interface IContactEdit {
  fullName?: string;
  email?: string;
  phone?: string;
  clientId?: string;
}

interface IContactEditForm {
  contact: IContact;
}

export const ContactEditForm = ({ contact }: IContactEditForm) => {
  const { clientsList, clientDetail } = useContext(ClientContext);
  const { editContact } = useContext(ContactContext);

  const registerSchema = yup.object().shape({
    fullName: yup.string(),
    email: yup.string(),
    phone: yup.string(),
    clientId: yup.string(),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IContactEdit>({
    resolver: yupResolver(registerSchema),
  });

  const handleEdit = (data: IContactEdit) => {
    editContact(data, contact.id);
    clientDetail(contact.clientId);
  };

  return (
    <Flex width="100%" justifyContent="center" alignItems="center">
      <Box
        as="form"
        w="100%"
        onSubmit={handleSubmit(handleEdit)}
        maxWidth="700px"
      >
        <VStack spacing="5" mt="5">
          <Box width="80%">
            <FormLabel color="orange.800">Nome Completo</FormLabel>
            <Input
              width="100%"
              placeholder="Nome completo"
              variant="filled"
              defaultValue={contact.fullName}
              {...register("fullName")}
            />
            {errors && <Text color="red">{errors.fullName?.message}</Text>}
          </Box>
          <Box width="80%">
            <FormLabel color="orange.800">Email</FormLabel>
            <Input
              type="email"
              width="100%"
              placeholder="Email"
              variant="filled"
              defaultValue={contact.email}
              {...register("email")}
            />
            {errors.email ? (
              <Text color="red">{errors.email?.message}</Text>
            ) : (
              <Text>fulano@mail.com</Text>
            )}
          </Box>
          <Box width="80%">
            <FormLabel color="orange.800">Telefone</FormLabel>
            <Input
              width="100%"
              placeholder="11111111111"
              variant="filled"
              defaultValue={contact.phone}
              {...register("phone")}
            />
            {errors && <Text color="red">{errors.phone?.message}</Text>}
          </Box>
          <Box width="80%">
            <FormLabel color="orange.800">Cliente</FormLabel>
            <Select
              defaultValue={contact.clientId}
              width="100%"
              variant="filled"
              {...register("clientId")}
            >
              <>
                <option value="">Selecione um Cliente</option>
                {clientsList?.map((client) => {
                  return (
                    <option key={client.id} value={client.id}>
                      {client.fullName}
                    </option>
                  );
                })}
              </>
            </Select>
            {errors && <Text color="red">{errors.clientId?.message}</Text>}
          </Box>
        </VStack>
        <Flex alignItems="center" justifyContent="center">
          <Button type="submit" mt={6} colorScheme="orange">
            Editar
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
