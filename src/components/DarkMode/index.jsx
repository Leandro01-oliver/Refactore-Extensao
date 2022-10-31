import { Flex } from "@chakra-ui/react"
import { useContext } from "react"
import { ContextGlobal } from "../../shared/context/global"
import { WiSolarEclipse } from 'react-icons/wi';
import { MdOutlineDarkMode } from 'react-icons/md'

const DarkMode = () =>{

    const { 
        darkMode,
        handlerDarkMode
    } = useContext(ContextGlobal)

    return(
        <>
            <Flex
                w={'30px'}
                h={'30px'}
                borderRadius={'50%'}
                boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                cursor={'pointer'}
                justifyContent={'center'}
                alignItems={'center'}
                onClick={handlerDarkMode}
            >
               {
                darkMode ?
                <MdOutlineDarkMode/>
                :
                <WiSolarEclipse/>
               }
            </Flex>
        </>
    )
}

export default DarkMode