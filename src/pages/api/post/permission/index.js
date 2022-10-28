import { permission } from "../../../../../utils/database/models/permission";


const postPermission = async (req, res) =>{

    const {
        method
    } = req;

    const {
        type,
        active,
        email
    } = req.body;

    console.log("Tipo : ",type);

    console.log("Active : ",active);

    console.log("Email : ",email);

    if (method === "POST") {
        await permission.create({
            data:{
               type:type,
                active: active,
                email: email    
            }
        }).then((result)=>{
           res.status(200).json({
            data: result,
            message: {
               codeState: 201,
               text: "Sucess in request permission"
            }
          })
        }).catch((err)=>{
            res.status(501).json({
                message: {
                    codeState: 501,
                    type: err,
                    text: "Error in request permission"
                 }
            })
        })
    }

}


export default postPermission;