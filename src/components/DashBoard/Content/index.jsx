import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ContextGlobal } from "../../../shared/context/global";

const DashBoardContent = () =>{

  const {
    menu,
    dropPerfil,
    handlerDropPerfil
  } = useContext(ContextGlobal);


  return(
    <>
         <Box
        p={'1rem'}
        h={'calc(100vh - 70px)'}
        display={menu ? {base:'none',md:'block'} : 'block'}
        w={menu ? {base:'100%',md:'calc(100% - 80px)'} : {base:'calc(100% - 80px)',md:'calc(100% - 250px)'}}
        ml={'auto'}
        onClick={dropPerfil ? handlerDropPerfil : null}
        >
        <Text>
        Home
        </Text>
        </Box>
    </>
  )
}

export default DashBoardContent;