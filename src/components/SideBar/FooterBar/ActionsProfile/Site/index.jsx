import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { CgWebsite } from "react-icons/cg"
import { ContextGlobal } from "../../../../../shared/context/global";

const ActionSite = () =>{

    const {
        menu
      } = useContext(ContextGlobal);

    return(
        <>
          <Link 
          href={'/'}
          >
            <Flex
            w={menu ? {base:'30px',md:'25px'} : {base:'25px',md:'30px'}}
            h={menu ? {base:'30px',md:'25px'} : {base:'25px',md:'30px'}}
            boxShadow={"0 0 10px 0 rgba(0,0,0,.25)"}
            borderRadius={'50%'}
            justifyContent={'center'}
            alignItems={'center'}
            fontSize={menu ? {base:'1rem',md:'.8rem'}:'1rem'}
            >
                <CgWebsite/>
            </Flex>
          </Link>
        </>
    )
}

export default ActionSite;