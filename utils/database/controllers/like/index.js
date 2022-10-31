
class LikeController{

    async getLikeAll(){
        await getLikeAllRepository();
    }

    async getLikeById(id){
        await getLikeByIdRepository(id);
    }

    async postLike(description){
       await postLikeRepository(description);
    }

}

export { LikeController }