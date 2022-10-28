import { postEventRepository } from "../../repositorys/event/post";

class eventController{

    getEventAll(){

    }

    getEventId(id){
        
    }

    
    postEvent(image, start_date, end_date, start_hour, end_hour, title, description, cep , country , state, andress, district , active){
       postEventRepository(image, start_date, end_date, start_hour, end_hour, title, description, cep , country , state, andress, district , active);
    }

}