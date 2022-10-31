import { Box } from "@chakra-ui/react"
import SideBar from "../../SideBar"
import NavBar from "../NavBar"
import AdminContent from "./Content"

const AdminComponent = () =>{
    return(
        <>
        <Box
           w={'100%'}
           minH={'100vh'}
          >
            <NavBar/>
            <SideBar/>
            <AdminContent/>
          </Box>
        </>
    )
}

export default AdminComponent