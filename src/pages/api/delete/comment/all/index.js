
const deleteCommentAll = async(req, res) =>{

    const {
        method
    } = req;

    const {
        description
    } = req.body;

    if (method === "DELETE") {
        await description
    }

}


export default deleteCommentAll;