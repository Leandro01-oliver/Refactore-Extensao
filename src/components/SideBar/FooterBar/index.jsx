import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ContextGlobal } from "../../../shared/context/global";
import ActionProfileBar from "./ActionsProfile";
import DropdownProfile from "./Dropdown";

const FooterBar = () =>{

    const {
        menu,
        dropPerfil
      } = useContext(ContextGlobal);

    return(
        <>
        <Box
        w={'100%'}
        mt={'auto'}
        >
        <DropdownProfile/>
        <Flex
        boxShadow={"0 0 10px 0 rgba(0,0,0,.25)"}
        borderRadius={dropPerfil ? '0 0 10px 10px' : '10px'}
        justifyContent={'space-between'}
        alignItems={'center'}
        position={'relative'}
        direction={menu ? {base:'row',md:'column'} :'row'}
        p={'.5rem'}
        >
            <ActionProfileBar/>
        </Flex>
        </Box>
        </>
    )
}

export default FooterBar;