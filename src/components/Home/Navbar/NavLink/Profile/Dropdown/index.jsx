import { Button, Flex, keyframes, Link } from '@chakra-ui/react'
import { useContext } from 'react'
import { ContextGlobal } from '../../../../../../shared/context/global'

const DropdownNavLink = () => {

  const { perfil, login, handlerLogin } = useContext(ContextGlobal)

  const animation = keyframes`
  to{
    opacity:1
   }
   from{
     opacity:0
   }
`

  return (
    <>
      <Flex
        display={perfil ? 'flex' : 'none'}
        direction={'column'}
        animation={perfil && `${animation} 1s ease-in-out`}
        position={'absolute'}
        top={'75px'}
        right={'1rem'}
        p={'1rem'}
        boxShadow={'0 0 10px 0 rgba(0,0,0,0.15)'}
        borderRadius={'10px'}
      >
        {login ? (
          <Button onClick={handlerLogin}>Sign In</Button>
        ) : (
          <>
          <Link
           href={'/dashboard'}
          >
            <Button mb={'.5rem'}>DashBoard</Button>
          </Link>
            <Button onClick={handlerLogin}>Sign Out</Button>
          </>
        )}
      </Flex>
    </>
  )
}

export default DropdownNavLink
