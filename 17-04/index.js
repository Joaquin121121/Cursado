import service from "./_services/user_service.js"

(async() =>{//No tiene parametros ni nombre, la llamo en el mismo momento
    //main:
    console.log(`Recuperando datos de usuarios\n`)
    const users = await service.get_all_users()
    users.forEach(element => console.log(element.toString() +"\n")) 
})() 