import { Box, Text } from "@chakra-ui/react"
import { useContext } from "react";
import { ContextGlobal } from "../../../shared/context/global";

const AboutContent = () =>{

  const {
    perfil,
    handlerPerfil
  } = useContext(ContextGlobal);

    return(
        <>
         <Box
            w={'100%'}
            minH={'calc(100vh - 70px)'}
            bg={'red'}
            onClick={perfil ? handlerPerfil : null}
         >
          <Text>
            Quem somos
          </Text>
         </Box>
        </>
    )
}

export default AboutContent