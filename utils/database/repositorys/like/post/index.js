import axios from "axios"


const postLikeRepository = (type, active, email) =>{
    
     axios.post("/api/post/participant/",{
        type: type, 
        active: active, 
        email: email
    })

}

export { postLikeRepository }