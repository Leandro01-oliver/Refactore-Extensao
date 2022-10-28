
const putCommentAll = async(req, res) =>{

    const {
        method
    } = req;

    const {
        description
    } = req.body;

    if (method === "PUT") {
        await description
    }

}


export default putCommentAll;