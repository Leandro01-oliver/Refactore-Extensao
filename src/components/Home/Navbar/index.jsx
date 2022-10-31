import { Box, Flex } from "@chakra-ui/react";
import Logo from "../../Logo";
import NavLink from "./NavLink"
import ProfileNavLink from "./NavLink/Profile";

const NavBar = () =>{

    return(
        <>
            <Flex
              w={'100%'}
              h={'70px'}
              alignItems={'center'}
              px={'1rem'}
              justifyContent={'space-between'}
              bg={'yellow'}
              borderBottom={'2px solid #000'}
            >
                <Logo/>
                <Box>
                  <NavLink/>
                </Box>
            </Flex>
        </>
    )

}

export default NavBar;