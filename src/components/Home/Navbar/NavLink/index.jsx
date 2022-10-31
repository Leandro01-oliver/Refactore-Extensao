import { Box, Button, Flex, Link } from "@chakra-ui/react"
import DarkMode from "../../../DarkMode";
import ProfileNavLink from "./Profile";


const NavLink = () =>{

    return(
        <>
        <Flex
        alignItems={'center'}
        >
        <Box>
          <Link
          href="/"
          >
          <Button>
            Home
          </Button>
          </Link>
          <Link
          href="/quem-somos"
          >
          <Button
          mx={'1rem'}
          >
            Quem Somos
          </Button>
          </Link>
          <Link
          href="/servico"
          >
          <Button>
            Serviço
          </Button>
          </Link>
        </Box>
        <Flex
        alignItems={'center'}
        ml={'1rem'}
        justifyContent={'space-between'}
        gap={'1rem'}
        >
          <DarkMode/>
          <ProfileNavLink/>
        </Flex>
        </Flex>
        </>
    )
}

export default NavLink;