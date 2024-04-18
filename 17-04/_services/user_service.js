import data from "../_data/data.js"

const get_all_users = async() =>{
    return await data.data_from_api()
}

export default {get_all_users}