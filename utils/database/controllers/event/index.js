import { postEventRepository } from "../../repositorys/event/post";

class EventController{

    async getEventAll(){
        await getEventAllRepository();
    }

    async getEventById(id){
        await getEventByIdRepository(id);
    }

    async postEvent(image, start_date, end_date, start_hour, end_hour, title, description, cep , country , state, andress, district , active){
       await postEventRepository(image, start_date, end_date, start_hour, end_hour, title, description, cep , country , state, andress, district , active);
    }

}

export { EventController }