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
import { ClientContext, IClients } from "../../contexts/ClientContext";

export interface IClientEdit {
  fullName?: string;
  email?: string;
  phone?: string;
  clientId?: string;
}

interface IClientEditForm {
  client: IClients;
  onClose: () => void;
}

export const ClientEditForm = ({ client, onClose }: IClientEditForm) => {
  const { editClient } = useContext(ClientContext);

  const registerSchema = yup.object().shape({
    fullName: yup.string(),
    email: yup.string(),
    phone: yup.string(),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IClientEdit>({
    resolver: yupResolver(registerSchema),
  });

  const handleEdit = (data: IClientEdit) => {
    if (client.id) {
      editClient(data, client.id);
      onClose();
    }
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
              defaultValue={client.fullName}
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
              defaultValue={client.email}
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
              placeholder="(34)12345678910"
              variant="filled"
              defaultValue={client.phone}
              {...register("phone")}
            />
            {errors && <Text color="red">{errors.phone?.message}</Text>}
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
