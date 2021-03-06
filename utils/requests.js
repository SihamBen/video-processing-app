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
    const {accessToken}=await res.json()
    return accessToken
}





export const getTranscripts = (conversationId) => {
    fetch(`https://api.symbl.ai/v1/conversations/${conversationId}/messages`, {
      method: 'GET',
      headers: {"x-api-key": token,'Content-Type': 'application/json',},
      mode:'no-cors'
    })
      .then((result) => {return result.messages})
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