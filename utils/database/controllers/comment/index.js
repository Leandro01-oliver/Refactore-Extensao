
class CommentController{

    async getCommentAll(){
        await getCommentAllRepository();
    }

    async getCommentById(id){
        await getCommentByIdRepository(id);
    }

    postComment(description){
       postCommentRepository(description);
    }

}

export { CommentController }