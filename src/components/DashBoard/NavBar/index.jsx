import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { ContextGlobal } from "../../../shared/context/global";
import DarkMode from "../../DarkMode";
import Logo from "../../Logo";
import Menu from "./Menu";

const NavBar = () =>{


    const {
        menu
      } = useContext(ContextGlobal);


    return(
        <>
           <Flex
                w={'100%'}
                h={'70px'}
                px={menu ? '0' : '1rem'}
                pr={'1rem'}
                justifyContent={'space-between'}
                display={{base:'none',md:'flex'}}
                borderBottom={'2px solid #000'}
           >
            <Flex
             h={'100%'}
             alignItems={'center'}
            >
                <Flex
                w={menu ? 'auto' : {base:'auto',md:'calc(250px - 1rem)'}}
                h={'100%'}
                px={'1.15rem'}
                borderRight={menu ? {base:'none',md:'2px solid #000'} : {base:'none',md:'2px solid #000'}}
                alignItems={'center'}
                justifyContent={'center'}
                >
                <Logo/>
                </Flex>
              <Menu/>
            </Flex>
            <Flex
              alignItems={'center'}
            >
                <DarkMode/>
            </Flex>
            </Flex>
            <Flex
             w={'100%'}
             h={'70px'}
             px={'1rem'}
             justifyContent={'space-between'}
            display={{base:'flex',md:'none'}}
            alignItems={'center'}
            borderBottom={'2px solid #000'}
            >
             <Flex
                w={{base:'auto',md:'calc(250px - 1rem)'}}
                h={'100%'}
                borderRight={{base:'none',md:'2px solid #000'}}
                alignItems={'center'}
                justifyContent={'center'}
                >
                <Logo/>
                </Flex>
                <Flex
                justifyContent={'space-between'}
                gap={'1rem'}
                >
                    <Menu/>
                    <DarkMode/>
                </Flex>
            </Flex>
        </>
    )
}

export default NavBar;