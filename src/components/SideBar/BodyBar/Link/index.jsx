import { Box, Button, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { BsCardText } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineCreate } from 'react-icons/md'
import { ContextGlobal } from '../../../../shared/context/global'
import { useContext } from 'react'

const BodyBarLink = () => {

    const {
        menu
      } = useContext(ContextGlobal);

  return (
    <>
      <Box>
        <Link href={'/dashboard/'}>
          <Button
            w={'100%'}
            display={'flex'}
            justifyContent={menu ? {base:'start',md:'center'} : {base:'center',md:'start'}}
            alignItems={'center'}
          >
            <Box
             fontSize={menu ? {base:'1rem',md:'.8rem'}:'1rem'}
            >
            <AiOutlineHome />
            </Box>
            <Text 
            ml={'.5rem'}
            display={menu ? {base:'block',md:'none'} :  {base:'none',md:'block'}}
            >Home</Text>
          </Button>
        </Link>
        <Link href={'/dashboard/acompanharEvento/'}>
          <Button
            w={'100%'}
            my={'1rem'}
            display={'flex'}
            justifyContent={menu ? {base:'start',md:'center'} : {base:'center',md:'start'}}
            alignItems={'center'}
          >
              <Box
              fontSize={menu ? {base:'1rem',md:'.8rem'}:'1rem'}
            >
             <BsCardText />
            </Box>
            <Text 
            ml={'.5rem'}
            display={menu ? {base:'block',md:'none'} :  {base:'none',md:'block'}}
            >Acompanhar Evento</Text>
          </Button>
        </Link>
        <Link href={'/dashboard/criarEvento/'}>
          <Button 
          w={'100%'}
          display={'flex'}
          justifyContent={menu ? {base:'start',md:'center'} : {base:'center',md:'start'}}
          alignItems={'center'}
          >
             <Box
              fontSize={menu ? {base:'1rem',md:'.8rem'}:'1rem'}
            >
            <MdOutlineCreate />
            </Box>
            <Text 
            ml={'.5rem'}
            display={menu ? {base:'block',md:'none'} :  {base:'none',md:'block'}}
            >Criar Evento</Text>
          </Button>
        </Link>
      </Box>
    </>
  )
}

export default BodyBarLink
