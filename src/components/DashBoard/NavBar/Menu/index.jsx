import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { ContextGlobal } from "../../../../shared/context/global";

const Menu = () =>{

    const {
        menu,
        handlerMenu
      } = useContext(ContextGlobal);

    return(
        <>
         <Flex
                w={'30px'}
                h={'30px'}
                ml={'1rem'}
                borderRadius={'50%'}
                cursor={'pointer'}
                boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                align={'center'}
                onClick={handlerMenu}
                justifyContent={'center'}
                >
                    {
                        menu ?
                        <MdClose/>
                        :
                        <GiHamburgerMenu/>
                    }
                </Flex>
        </>
    )
}

export default Menu;