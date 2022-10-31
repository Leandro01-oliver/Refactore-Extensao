import { Flex, keyframes } from '@chakra-ui/react'
import { useContext } from 'react'
import { ContextGlobal } from '../../../../../shared/context/global'
import DropdownNavLink from './Dropdown'

const ProfileNavLink = () => {

  const { handlerPerfil, perfil } = useContext(ContextGlobal)

  return (
    <>
      <Flex
        w={'30px'}
        h={'30px'}
        boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
        justifyItems={'center'}
        alignItems={'center'}
        borderRadius={'50%'}
        cursor={'pointer'}
        onClick={handlerPerfil}
        >

        </Flex>
        <DropdownNavLink/>
    </>
  )
}

export default ProfileNavLink
