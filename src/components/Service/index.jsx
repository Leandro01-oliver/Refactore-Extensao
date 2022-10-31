import { Box, Flex } from "@chakra-ui/react"
import NavBar from "../Home/Navbar"
import ServiceContent from "./Content"


const ServiceComponent = () =>{

    return(
        <>
          <Box
           w={'100%'}
           minH={'100vh'}
          >
            <NavBar/>
            <ServiceContent/>
          </Box>
        </>
    )
}

export default ServiceComponent