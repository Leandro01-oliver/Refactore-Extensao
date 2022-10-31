import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { useContext } from 'react';
import LogoNav from '../../../public/logo.png'
import { ContextGlobal } from '../../shared/context/global';

const Logo = () => {

    const {
        menu
      } = useContext(ContextGlobal);

  return (
    <>
      <Box 
      w={menu ? "40px" : {base:'40px',md:"55px"}}
      h={menu ? "40px" : {base:'40px',md:"55px"}} 
      cursor={'pointer'}>
        <Image
          src={LogoNav}
          alt="Imagem de Logo"
          width={'auto'}
          height={'auto'}
          style={{
            borderRadius: '50%',
          }}
        />
      </Box>
    </>
  )
}

export default Logo
