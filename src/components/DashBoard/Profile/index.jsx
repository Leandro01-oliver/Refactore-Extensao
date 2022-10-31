import { Box } from "@chakra-ui/react"
import SideBar from "../../SideBar"
import NavBar from "../NavBar"
import ProfileContent from "./Content"

const ProfileComponent = () =>{
    return(
        <>
        <Box
           w={'100%'}
           minH={'100vh'}
          >
            <NavBar/>
            <SideBar/>
            <ProfileContent/>
          </Box>
        </>
    )
}

export default ProfileComponent