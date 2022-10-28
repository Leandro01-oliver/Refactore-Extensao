import axios from "axios"


const postPermissionRepository = (type, active, email) =>{
    
     axios.post("/api/post/permission/",{
        type: type, 
        active: active, 
        email: email
    })

}

export { postPermissionRepository }