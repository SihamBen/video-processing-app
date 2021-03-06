import {Container,Input,Stack,Button, Heading, ListItem,OrderedList,Flex} from '@chakra-ui/react'
import {useState} from 'react'
import {useAuth} from '../hooks/index'
import {login} from '../utils/requests'
export default function ProtectedPage({children}){
const [appId,setAppId]=useState('')
const [appSecret,setAppSecret]=useState('')
const {token,setToken}=useAuth('')
function loginToSymbl(){    
const token=login(appId,appSecret)
setToken(token) 
}
return(
    <>
    {!token?
        (<Flex justify="space-between" m='100px'>

      <Container bg="red">
              <OrderedList>
                <ListItem>Sign up to Symbl</ListItem>
                <ListItem>Sign up to Symbl</ListItem>
                <ListItem>Sign up to Symbl</ListItem>
                <ListItem>Sign up to Symbl</ListItem>
              </OrderedList>
            </Container>

            <Stack spacing={3} marginBottom="1rem" bg="red">
              <Input
                placeholder="appId"
                size="md"
                onChange={(e) => setAppId(e.target.value)}
                value={appId}
              />
              <Input
                placeholder="appSecret"
                size="md"
                value={appSecret}
                onChange={(e) => setAppSecret(e.target.value)}
              />
              <Button onClick={() => loginToSymbl()}>Login</Button>
            </Stack>
            
            
          </Flex>):(children)

    }
    
    
    
    </>
)


}