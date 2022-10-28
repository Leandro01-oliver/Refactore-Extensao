
const deleteCommentId = async(req, res) =>{

    const {
        method
    } = req;

    const {
        description
    } = req.body;

    const {
        id
    } = req.query;

    if (method === "DELETE") {
        await description
    }

}


export default deleteCommentId;