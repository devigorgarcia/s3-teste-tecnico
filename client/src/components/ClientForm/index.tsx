import {
  Box,
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ClientContext } from "../../contexts/ClientContext";

interface IClientRegister {
  fullName: string;
  email: string;
  phone: string;
}

export const ClientForm = () => {
  const { registerClient } = useContext(ClientContext);

  const registerSchema = yup.object().shape({
    fullName: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório"),
    phone: yup.string().required("Campo Obrigatório"),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IClientRegister>({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = (data: IClientRegister) => {
    registerClient(data);
  };

  return (
    <Flex width="100%" justifyContent="center" alignItems="center">
      <Box
        as="form"
        w="100%"
        onSubmit={handleSubmit(handleRegister)}
        maxWidth="700px"
        alignSelf={["flex-start", "center"]}
      >
        <Heading color="orange.800" textAlign="center">
          Cadastrar Cliente
        </Heading>
        <VStack spacing="5" mt="5">
          <Box width="80%">
            <FormLabel color="orange.800">Nome Completo</FormLabel>
            <Input
              width="100%"
              placeholder="Nome completo"
              variant="filled"
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
              placeholder="(11)998745632"
              variant="filled"
              {...register("phone")}
            />
            {errors && <Text color="red">{errors.phone?.message}</Text>}
          </Box>
        </VStack>
        <Flex alignItems="center" justifyContent="center">
          <Button type="submit" mt={6} colorScheme="orange">
            Cadastrar
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
