
const putParticipantId = async(req, res) =>{

    const {
        method
    } = req;

    const {
        description
    } = req.body;

    const {
        id
    } = req.query;

    if (method === "PUT") {
        await description
    }

}


export default putParticipantId;