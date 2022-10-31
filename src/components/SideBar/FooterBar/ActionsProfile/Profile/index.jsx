import { Avatar, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { ContextGlobal } from "../../../../../shared/context/global";

const ActionProfile = () =>{
    
      const {
        menu,
        handlerDropPerfil
      } = useContext(ContextGlobal);

    return(
        <>
          <Avatar
          w={menu ? {base:'40px',md:'25px'}:{base:'25px',md:'40px'}}
          h={menu ? {base:'40px',md:'25px'}:{base:'25px',md:'40px'}}
          cursor={'pointer'}
           mb={menu ? {base:0,md:'.5rem'} : {base:'.5rem',md:0}}
           onClick={handlerDropPerfil}
         />
        </>
    )
}

export default ActionProfile;