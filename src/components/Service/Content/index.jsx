import { Box, Text } from "@chakra-ui/react"
import { useContext } from "react";
import { ContextGlobal } from "../../../shared/context/global";


const ServiceContent = () =>{

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
           Serviço
          </Text>
         </Box>
        </>
    )
}

export default ServiceContent