import { Box, Flex } from "@chakra-ui/react"
import SideBar from "../SideBar"
import DashBoardContent from "./Content"
import NavBar from "./NavBar"


const DashBoardComponent = () =>{

    return(
        <>
          <Box
           w={'100%'}
           minH={'100vh'}
          >
            <NavBar/>
            <Flex>
            <SideBar/>
            <DashBoardContent/>
            </Flex>
          </Box>
        </>
    )
}

export default DashBoardComponent