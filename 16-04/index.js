import servicio from "./Service/service.js"

(async function main() {
    console.log("Ingresamos al main...")
    let posts = await servicio.obtener_posts()
    console.log("*******")
    console.log(posts)
})() // El doble parentesis indica que es una funcion autoinvocable