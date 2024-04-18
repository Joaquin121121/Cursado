import fetch from "node-fetch"
import User from "../user.js"

const data_from_api = async() =>{
    const v = []
    const URL ="https://jsonplaceholder.typicode.com/users"
    const response = await fetch(URL)
    const json = await response.json()//Para que me devuelva el JSON la respuesta 

    json.forEach(element => { //Ejecuta una Callback por cada elemento en la lista
        let id = element.id
        let name = element.name
        let email = element.email
        const user = new User(id, name, email)
        v.push(user)
    });
    return v
}

export default {data_from_api} //Exporta la funcion como objeto