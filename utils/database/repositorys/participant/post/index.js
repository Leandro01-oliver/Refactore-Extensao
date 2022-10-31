import axios from "axios"


const postParticipantRepository = (type, active, email) =>{
    
     axios.post("/api/post/participant/",{
        type: type, 
        active: active, 
        email: email
    })

}

export { postParticipantRepository }