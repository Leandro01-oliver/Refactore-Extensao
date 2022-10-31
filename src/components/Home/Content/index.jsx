import { Box, Text } from "@chakra-ui/react"
import { useContext } from "react";
import { ContextGlobal } from "../../../shared/context/global";
import ProfileNavLink from "../Navbar/NavLink/Profile"


const ContentHome = () =>{

  const {
    perfil,
    handlerPerfil
  } = useContext(ContextGlobal);

    return(
    <>
      <Box
      w={'100%'}
      minH={'calc(100vh - 70px)'}
      p={'1rem'}
      bg={'red'}
      onClick={perfil ? handlerPerfil : null}
      >
        <Box>
        <Text>
            Teste
        </Text>
        </Box>
      </Box>
    </>)
}

export default ContentHome