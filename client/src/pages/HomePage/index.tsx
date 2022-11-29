import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

import { ClientForm } from "../../components/ClientForm";
import { ContactForm } from "../../components/ContactForm";

export const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const MotionFlex = motion(Flex);
  return (
    <Flex flexDir="column" gap={4}>
      <Heading textAlign="center">Home Page</Heading>
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
  );
};
