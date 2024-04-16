let today = new Date();
console.log(today);

let mm = today.getMonth();
console.log(mm);
(mm < 1) ? console.log(mm) : console.log("No es octubre");

// alternativa de arrow function

sumar3 = function(a,b){
    return a + b;
}


const valor = "rojo";


const imprimirColor = (color) =>{
    switch(color){
        case "rojo":
            console.log("color rojo")
        case "azul":
            console.log("color azul")
        default:
            console.log("no hay color")
    }
}

imprimirColor(valor)

const ejemploFor = (ejemploFor) =>{

}

const ej = (a,b) =>{
    if (a === b){
        return ((a + b) * 3)
    }
}

console.log(ej(2,2))

const ej2 = (str) => {
    if (str.substr(0,1) === "Py" ) {
        return str;
    }
    else{
        return "pi" + str;
    }
}
ej2("asdai")

const ej3 = (str) =>{
    if(typeof str === "string"){
        return str[0] + str + str[0]
    }
    return "no es str"
    
}

console.log(ej3("boca"))

const ej4 = (a, b, c) =>{
    let may = a
    if (b > a){
        if(b > c){
            may = b
        }
        else{
            may = c
        }
    }
    return may
}

console.log(ej4(10,9,8))