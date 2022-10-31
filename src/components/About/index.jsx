import { Box, Flex } from "@chakra-ui/react"
import NavBar from "../Home/Navbar"
import AboutContent from "./Content"


const AboutComponent = () =>{

    return(
        <>
          <Box
           w={'100%'}
           minH={'100vh'}
          >
            <NavBar/>
            <AboutContent/>
          </Box>
        </>
    )
}

export default AboutComponent