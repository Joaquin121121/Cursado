import {Post} from "../Models/posts.js"
import fetch from "node-fetch"

async function obtener_posts(){
    const result = []
    const url = "https://jsonplaceholder.typicode.com/posts"
    
    try{
        const promesa = await fetch(url) // Fetch es una funcion asincronica

        const data = await promesa.json()

        data.forEach(element => {
            const postAux = new Post()
            postAux.id = element.id
            postAux.title = element.title
            postAux.body = element.body
            result.push(postAux)

        });


        //console.log(JSON.stringify(data))

        return result;
    }
    catch(error){
        console.log("Error!!! " + error)
    }
}


export default{
    obtener_posts
}