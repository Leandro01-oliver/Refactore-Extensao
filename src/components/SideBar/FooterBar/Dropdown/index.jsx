import { Box, Button, Flex, keyframes, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { ContextGlobal } from '../../../../shared/context/global'
import { RiAdminLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import Link from 'next/link'

const DropdownProfile = () => {
  const { dropPerfil, menu } = useContext(ContextGlobal)

  const animation = keyframes`
    to{
     bottom:-0px;
     opacity:1
    }
    from{
      bottom:0;
      opacity:0
    }
  `

  return (
    <>
      <Flex
        direction={'column'}
        bg={'red'}
        p={'1rem'}
        display={dropPerfil ? 'flex' : 'none'}
        borderTopRadius={'10px'}
        alignItems={'center'}
        position={'relative'}
        animation={dropPerfil && `${animation} 1s ease-in-out`}
        justifyContent={'center'}
      >
        <Button
          w={menu ? { base: '100%', md: '30px' } : { base: '30px', md: '100%' }}
          h={
            menu
              ? { base: '2.3rem', md: '30px' }
              : { base: '30px', md: '2.3rem' }
          }
          minW={'auto'}
          borderRadius={
            menu ? { base: '5px', md: '40px' } : { base: '40px', md: '5px' }
          }
          display={'flex'}
          alignItems={'center'}
          justifyContent={
            menu
              ? { base: 'start', md: 'center' }
              : { base: 'center', md: 'start' }
          }
        >
            <Link
            href={'/dashboard/profile/'}
            style={{
               display:'flex',
               alignItems:'center'
            }}
            >
          <Box 
            fontSize={menu ? { base: '1rem', md: '.8rem' } : '1rem'}
            mr={menu ? { base: '.5rem', md: '0' } : { base: '0', md: '.5rem' }}
            >
            <CgProfile />
          </Box>
          <Text
            display={
              menu
                ? { base: 'block', md: 'none' }
                : { base: 'none', md: 'block' }
            }
          >
            Menu Perfil
          </Text>
            </Link>
        </Button>
        <Button
          w={menu ? { base: '100%', md: '30px' } : { base: '30px', md: '100%' }}
          h={
            menu
              ? { base: '2.3rem', md: '30px' }
              : { base: '30px', md: '2.3rem' }
          }
          minW={'auto'}
          mt={'.5rem'}
          borderRadius={
            menu ? { base: '5px', md: '40px' } : { base: '40px', md: '5px' }
          }
          display={'flex'}
          justifyContent={
            menu
              ? { base: 'start', md: 'center' }
              : { base: 'center', md: 'start' }
          }
        >
            <Link
            href={'/dashboard/admin/'}
            style={{
               display:'flex',
               alignItems:'center'
            }}
            >
          <Box 
          fontSize={menu ? { base: '1rem', md: '.8rem' } : '1rem'}
          mr={menu ? { base: '.5rem', md: '0' } : { base: '0', md: '.5rem' }}
          >
            <RiAdminLine />
          </Box>
          <Text
            display={
              menu
                ? { base: 'block', md: 'none' }
                : { base: 'none', md: 'block' }
            }
          >
            Perfil Admin
          </Text>
        </Link>
        </Button>
      </Flex>
    </>
  )
}

export default DropdownProfile
