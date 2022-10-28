
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Logo from "/public/logo.png"

const LogoNav = () =>{

    return(
      <>
         <Box
            w={'50px'}
            h={'50px'}
            cursor={'pointer'}
         >
            <Image
                src={Logo}
                alt="Picture of the author"
                style={{
                    borderRadius:"50%"
                }}
            />
         </Box>
      </>
    )
}

export default LogoNav;
