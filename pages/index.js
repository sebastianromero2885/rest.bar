import { Flex, Center, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from "next/router";
import { Select } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [mesausuario, setMesausuario] = useState("");

  console.log(mesausuario);
  return (
    <Flex width={"100vw"} height={"100vh"} flexDir="column">
      <Center h={"20vh"}>
        <Text fontSize={"xl"}>Pagina de inicio</Text>
      </Center>

      <Flex flexDir={"column"} h={"80vh"} width="100%" gap={4}>
        <Center>
          <Text> ¿ En que mesa estás sentado? </Text>
        </Center>

        <Select
          variant="filled"
          width={"80%"}
          alignSelf={"center"}
          value={mesausuario}
          onChange={(e) => {
            setMesausuario(e.target.value);
          }}
        >
          <option value="" disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Select>
        {!mesausuario ? null : (
          <Button
          colorScheme="blue"
          width={"50%"}
          alignSelf="center"
          gap={1}
          onClick={() => {
            router.push(`/mesa/[id]`,`/mesa/${mesausuario}`);
          }}
          >
            Elegí la mesa
            <ArrowForwardIcon></ArrowForwardIcon>
             
          </Button>
          
        )}
      </Flex>
    </Flex>
  );
}
