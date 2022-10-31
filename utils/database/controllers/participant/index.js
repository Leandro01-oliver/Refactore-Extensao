
class ParticipantController{

    async getParticipantAll(){
        await getParticipantAllRepository();
    }

    async getParticipantById(id){
        await getParticipantByIdRepository(id);
    }

    async postParticipant(description){
       await postParticipantRepository(description);
    }

}

export { ParticipantController }