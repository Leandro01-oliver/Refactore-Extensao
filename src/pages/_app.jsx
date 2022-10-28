import { ChakraProvider } from '@chakra-ui/react'
import { ContextGlobalProvider } from '../shared/context/global'
import '../styles/globals.css'


const MyApp = ({ Component, pageProps }) =>{
  return (
    <>
    <ContextGlobalProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
    </ContextGlobalProvider>
    </>
  )
}

export default MyApp
