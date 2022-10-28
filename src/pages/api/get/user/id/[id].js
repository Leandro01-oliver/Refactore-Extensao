
const getUserId = async(req, res) =>{

    const {
        method
    } = req;

    const {
        description
    } = req.body;

    const {
        id
    } = req.query;

    if (method === "GET") {
        await description
    }

}


export default getUserId;