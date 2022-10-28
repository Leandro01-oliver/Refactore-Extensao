import axios from "axios"


const postCommentRepository = async (description)=>{

    await axios("",{
        description: description
    }).then((result)=>{
        console.log(result.data)
    })
    .catch((err)=>{
        console.error(err)
    })
}

export { postCommentRepository }