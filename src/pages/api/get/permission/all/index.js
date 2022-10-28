

const getPermissionAll = async(req, res) =>{

    const {
        method
    } = req;

    const {
        description
    } = req.body;

    if (method === "GET") {
        await description
    }

}


export default getPermissionAll;