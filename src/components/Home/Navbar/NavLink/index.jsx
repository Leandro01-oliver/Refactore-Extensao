import { Button } from "@chakra-ui/react"
import { useContext } from "react";
import { ContextGlobal } from "../../../../shared/context/global";
import CreatePermissao from "./CreatePermissao";


const NavLink = () =>{

    const {
        handlerModal
      } = useContext(ContextGlobal);

    return(
        <>
          <Button
          onClick={handlerModal}
          >
            Criar permissão
          </Button>
          <CreatePermissao/>
        </>
    )
}

export default NavLink;