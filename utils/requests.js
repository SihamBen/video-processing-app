import axios from 'axios'

export const login=async (appId,appSecret)=>{
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
  return await res.json()
    
   
}





export const getTranscripts = (conversationId,token) => {
  console.log(token)
  axios({url:`https://api.symbl.ai/v1/conversations/${conversationId}/messages`,
  headers:{"x-api-key":token,'Content-Type':'application/json'},mode:'no-cors'})
  .then((result) => {return result.messages})

    /*fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/messages`, {
      method: 'GET',
      headers: {"x-api-key":token,'Content-Type':'text/plain'},
      mode:"no-cors"
      
    })
      .then((result) => {return result.messages})*/
  }
export const getQuestions = (conversationId) => {
    fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/messages`, {
      method: 'GET',
      headers: {"x-api-key": token,'Content-Type': 'application/json',},
      mode:'no-cors'
    })
      .then((result) => {return result.messages})
  }
export const getInsights = (conversationId) => {
    fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/messages`, {
      method: 'GET',
      headers: {"x-api-key": token,'Content-Type': 'application/json',},
      mode:'no-cors'
    })
      .then((result) => {return result.messages})
  } 
  export const getSpeakers = (conversationId) => {
    fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/messages`, {
      method: 'GET',
      headers: {"x-api-key": token,'Content-Type': 'application/json',},
      mode:'no-cors'
    })
      .then((result) => {return result.messages})
  }   