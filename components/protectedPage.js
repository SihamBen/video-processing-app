import {Container,Input,Stack,Button} from '@chakra-ui/react'
import {useState} from 'react'
import {useAuth} from '../hooks/index'
export default function ProtectedPage({children}){
const [appId,setAppId]=useState('')
const [appSecret,setAppSecret]=useState('')
const {token,setToken}=useAuth('')
let isLoggedIn=token
async function loginToSymbl(){
    const res=await fetch('https://api.symbl.ai/oauth2/token:generate',{
        method:"POST",
        headers:{
            'Content-type':"application/json"
        },
        mode: "cors",
        body:JSON.stringify(
            {
                type:'application',
                appId,
                appSecret
            }
        )
    })
    const {accessToken}=await res.json()

    setToken(accessToken)
 
}

return(
    <>
    {!isLoggedIn?
        (<Container>
            <Stack spacing={3} marginBottom="1rem">
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
            </Stack>
            <Button onClick={() => loginToSymbl()}>Login</Button>
          </Container>):(children)

    }
    
    
    
    </>
)


}