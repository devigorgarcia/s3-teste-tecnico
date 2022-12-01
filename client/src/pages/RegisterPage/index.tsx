import { Box, Button, Divider, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

import { ClientForm } from "../../components/ClientForm";
import { ContactForm } from "../../components/ContactForm";
import { DisplayContacts } from "../../components/DisplayContacts";

export const RegisterPage = () => {
  const [toggle, setToggle] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const MotionFlex = motion(Flex);
  return (
    <>
      {showContact ? (
        <DisplayContacts />
      ) : (
        <Flex flexDir="column" gap={4}>
          <Heading textAlign="center">Cadastro</Heading>
          <Flex align="center" justifyContent="center" gap={5}>
            <Button onClick={() => setToggle(true)}>Contato</Button>
            <Button onClick={() => setToggle(false)}>Cliente</Button>
          </Flex>

          <Flex width="100%" h="600px">
            {toggle ? (
              <>
                <ContactForm />
                <MotionFlex
                  initial={{ opacity: 0, x: "-1000px" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ default: { ease: "linear" } }}
                >
                  <Box bg="orange.600" w="50vw"></Box>
                </MotionFlex>
              </>
            ) : (
              <>
                <MotionFlex
                  transition={{ default: { ease: "linear" } }}
                  initial={{ opacity: 0, x: "1000px" }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Box bg="orange.600" w="50vw"></Box>
                </MotionFlex>
                <ClientForm />
              </>
            )}
          </Flex>
        </Flex>
      )}
      <Flex align="center" justifyContent="center" mt="10">
        {showContact ? (
          <Button colorScheme="orange" onClick={() => setShowContact(false)}>
            Voltar
          </Button>
        ) : (
          <Button colorScheme="orange" onClick={() => setShowContact(true)}>
            Mostrar Contatos
          </Button>
        )}
      </Flex>
    </>
  );
};
