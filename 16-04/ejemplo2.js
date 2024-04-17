let x = 11

const p = new Promise((resolve, reject) => {
    if(x === 10){
        resolve("La variable es igual a 10")
    }
    else{
        reject("La variable no es igual a 10")
    }
})