import { postPermissionRepository } from "../../repositorys/permission/post";

class PermissionController{

    getPermissionAll(){

    }

    getPermissionId(id){
        
    }

    async postPermission(type, active, email){
        await postPermissionRepository(type, active, email);
    }

}

export { PermissionController }