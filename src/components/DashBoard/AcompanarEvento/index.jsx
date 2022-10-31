import { Box, Flex } from "@chakra-ui/react"
import SideBar from "../../SideBar"
import NavBar from "../NavBar"
import AcompanarEventoContent from "./Content"

const AcompanarEventoComponent = () =>{
    return(
        <>
            <Box
           w={'100%'}
           minH={'100vh'}
          >
            <NavBar/>
            <Flex>
            <SideBar/>
            <AcompanarEventoContent/>
            </Flex>
          </Box>
        </>
    )
}

export default AcompanarEventoComponent


