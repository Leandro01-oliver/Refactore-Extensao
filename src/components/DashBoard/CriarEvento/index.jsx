import { Box, Flex } from "@chakra-ui/react"
import CreateEventoContent from './Content'
import SideBar from "../../SideBar"
import NavBar from "../NavBar"

const CreateEventoComponent = () =>{
    return(
        <>
          <Box
           w={'100%'}
           minH={'100vh'}
          >
            <NavBar/>
            <Flex>
            <SideBar/>
            <CreateEventoContent/>
            </Flex>
          </Box>
        </>
    )
}

export default CreateEventoComponent