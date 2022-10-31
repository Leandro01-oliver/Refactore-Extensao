import { Box, Flex, keyframes } from "@chakra-ui/react";
import { useContext } from "react";
import { ContextGlobal } from "../../shared/context/global";
import BodyBar from "./BodyBar";
import FooterBar from "./FooterBar";


const SideBar = () =>{

  const {
    menu
  } = useContext(ContextGlobal);


  const animation = keyframes`
    0%{
     left:-70px;
     opacity:0
    }
    50%{
      left:0;
      opacity:.15
    }
    100%{
      left:0;
      opacity:1
    }
  `

    return(
        <>
          <Flex
          h={'calc(100vh - 70px)'}
          w={menu ? {base:'100%',md:'80px'} : {base:'80px',md:'250px'}}
          bg={"green"}
          overflowY={'auto'}
          direction={'column'}
          position={'absolute'}
          animation={menu && `${animation} 1s ease-in-out`}
          top={'70px'}
          left={0}
          px={'1rem'}
          py={'1.5rem'}
          gap={'1rem'}
          >
            <BodyBar/>
            <FooterBar/>
          </Flex>
        </>
    )
}

export default SideBar;
