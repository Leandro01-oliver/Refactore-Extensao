import { Box, Flex } from "@chakra-ui/react";
import LogoNav from "./LogoNav";
import NavLink from "./NavLink";

const NavBar = () =>{

    return(
        <>
            <Flex
              w={'100%'}
              h={'70px'}
              alignItems={'center'}
              px={'1rem'}
              justifyContent={'space-between'}
              borderBottom={'2px solid #000'}
            >
                <LogoNav/>
                <Box>
                  <NavLink/>
                </Box>
            </Flex>
        </>
    )

}

export default NavBar;