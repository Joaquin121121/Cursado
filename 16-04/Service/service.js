import datos from "../Data/posts_data.js"

async function obtener_posts(){
    const result = await datos.obtener_posts()

    return result
}

export default{
    obtener_posts
}