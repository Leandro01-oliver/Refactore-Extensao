import { Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { ContextGlobal } from '../../../../shared/context/global'
import ActionProfile from './Profile'
import ActionSite from './Site'

const ActionProfileBar = () => {
  const { menu } = useContext(ContextGlobal)
  return (
    <>
      <Flex
        direction={
          menu ? { base: 'row', md: 'column' } : { base: 'column', md: 'row' }
        }
        justifyContent={'space-between'}
        w={'100%'}
        alignItems={'center'}
      >
        <ActionProfile />
        <ActionSite />
      </Flex>
    </>
  )
}

export default ActionProfileBar
