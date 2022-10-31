import { postPermissionRepository } from "../../repositorys/permission/post";

class PermissionController{

    async getPermissionAll(){
        await getPermissionAllRepository();
    }

    async getPermissionById(id){
        await getPermissionByIdRepository(id);
    }

    async postPermission(type, active, email){
        await postPermissionRepository(type, active, email);
    }

}

export { PermissionController }