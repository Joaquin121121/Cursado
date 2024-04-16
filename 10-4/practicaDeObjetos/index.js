import EstacionMet from "./estacion.js" 


function main(){
    const est = new EstacionMet(10)
    console.log(est.mostrar_datos())
    console.log(est.filtrar_temperaturas(20))
}
main()