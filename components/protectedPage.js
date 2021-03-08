import {Input,Stack,Button, ListIcon, ListItem,List,Flex, Link, Square,Box} from '@chakra-ui/react'
import {useState} from 'react'
import {CheckCircleIcon} from '@chakra-ui/icons'
import {useAuth} from '../hooks/index'
import {login} from '../utils/requests'
export default function ProtectedPage({children}){
const [appId,setAppId]=useState('')
const [appSecret,setAppSecret]=useState('')
const {token,setToken}=useAuth(null)
function loginToSymbl (){    
login(appId,appSecret).then((res)=>setToken(res.accessToken))
}
return(
    <>
    {!token?
        (<Flex as="flex" direction="raw" h="100vh" bgImage="url('bg3.png')"  bgSize="cover" align="center" justify="center">

      <Box   w={{sm:"30vw",base:"100vw"}}  color='rgba(255, 255, 255, 0.8)'  mr="3rem">
              <List fontSize="3xl" spacing="2rem">
                <ListItem><ListIcon as={CheckCircleIcon} mr="1rem" color="white" /><Link href="https://platform.symbl.ai/signup" color="red">Sign up</Link> to Symbl</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} mr="1rem" color="white" />Get your credentials</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} mr="1rem" color="white" />Upload your video</ListItem>
                <ListItem><ListIcon as={CheckCircleIcon} mr="1rem" color="white" />Get insights about your video</ListItem>
              </List>
            </Box>

            <Stack spacing={6} marginBottom="1rem"  w={{sm:"30vw",base:"100vw"}}  color="white" >
              <Input
                placeholder="Your application's Id"
                size="md"
                onChange={(e) => setAppId(e.target.value)}
                value={appId}
                _focus={
                  {borderColor:'red',borderWidth:"2px"}
                }
              />
              <Input
                placeholder="Your application's secret"
                size="md"
                value={appSecret}
                onChange={(e) => setAppSecret(e.target.value)}
                _focus={
                  {borderColor:'red',borderWidth:"2px"}
                }
              />
              <Button onClick={() => loginToSymbl()}  bg="red" _hover={
                  {bg:"white",color:'red'}
                }>Login</Button>
            </Stack>
           
           
          </Flex>):(children)

    }
    
    
    
    </>
)


}