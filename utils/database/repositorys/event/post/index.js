import axios from "axios"


const postEventRepository = async (image, start_date, end_date, start_hour, end_hour, title, description, cep , country , state, andress, district , active) =>{
    
    await axios.post("/api/post/event/",{
        image: image, 
        start_date: start_date, 
        end_date:end_date, 
        start_hour: start_hour, 
        end_hour: end_hour, 
        title: title, 
        description: description, 
        cep: cep, 
        country: country, 
        state: state, 
        andress: andress, 
        district: district, 
        active: active
    })

}

export { postEventRepository }