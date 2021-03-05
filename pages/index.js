import { AspectRatio,Box } from '@chakra-ui/layout'
import {useState,useRef,useEffect} from 'react'
import Head from 'next/head'
import ProtectedPage from '../components/protectedPage'
import { useAuth } from '../hooks/index'

export default function Home() {
  const [file,setFile]=useState('')
  const [videoSrc,setVideoSrc]=useState('')
  const videoRef=useRef(null)
  const {token}=useAuth('')
  useEffect(() => {
    const src=URL.createObjectURL(new Blob([file],{type:'video/mp4'}))
    setVideoSrc(src)
    
  }, [file])
const processVideo=(file)=>
  { 
    const options={method:"POST",
    headers:{'x-api-key':token,
    'Content-Type':"video/mp4",
    },
    body:file,
    json:true
  }
    fetch('https://api.symbl.ai/v1/process/video',options).then((rawRes)=>
      rawRes.json()).then((res)=>{console.log(res)})
    
  }
  return (
    <ProtectedPage>
    <input type="file" id="input" accept="video/*" onChange={(e)=>setFile(e.target.files[0])}></input>
    <Box bg="lightgrey" marginBottom="1rem">
            <AspectRatio maxH="100%" ratio={16 / 9}>
              <video
                id="video-summary"
                autoPlay
                ref={videoRef}
                controls
                src={videoSrc}
              />
            </AspectRatio>
          </Box>
    <button onClick={()=>processVideo(file)}>send for processing</button>
    </ProtectedPage>
  )
}
