import { Box } from "@chakra-ui/react";
import ContentHome from "./Content";
import NavBar from "./Navbar";

const HomeComponent = () =>{

    return(
        <>
        <Box
        w={'100%'}
        minH={'100vh'}
        >
            <NavBar/>
            <ContentHome/>
        </Box>
        </>
    )
}

export default HomeComponent;