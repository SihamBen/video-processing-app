import { ChakraProvider,extendTheme } from '@chakra-ui/react';
import {AuthProvider} from '../hooks/index'

const colors = {
  brand: {
   
  },
}
const theme = extendTheme({ colors })
function MyApp({ Component, pageProps }) {
  return   <ChakraProvider theme={theme} resetCSS><AuthProvider><Component {...pageProps} /></AuthProvider></ChakraProvider> 
}

export default MyApp
