import {Flex,Heading} from '@chakra-ui/react'
export default function Header()
{
    return(
        <>
        <Flex as="nav" align="center" mr= {5}>
<Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
Video Analysis App
</Heading>
        </Flex>
        
        </>
    )
}