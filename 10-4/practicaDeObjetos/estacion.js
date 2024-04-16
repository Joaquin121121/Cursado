import SensorValue from "./sensor.js"
import data from './data.json' assert { type: 'json' }
export default class EstacionMet{
    constructor(n){
 /*       this.values = Array(n) le digo que va a ser igual a un array de n elementos */
        //this.values = this.leer_valores(n) funciona para los aleatorios
        this.values = this.leer_valores_JSON()
    }
    leer_valores(n){
        let list = []
        for(let i = 0; i < n; i++){
            let id = Math.floor(Math.random() * 100) // genera un valor aleatorio y trunca al entero mas grande
            let temp = Math.floor(Math.random() * 40)
            let humedad = Math.floor(Math.random() * 90)
            let hora = `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}`
            const value = new SensorValue(id, temp, humedad, hora)
            list.push(value)
        }
        return list
    }
    leer_valores_JSON(){
        let list = []
        for(let i = 0; i < data.length; i++){
            let id = data[i]["id"]
            let temp = data[i]["temp"]
            let humedad = data[i]["humedad"]
            let hora = data[i]["hora"]
            const value = new SensorValue(id, temp, humedad, hora)
            list.push(value)
        }
        return list
    }
    mostrar_datos(){
        let listado = "LISTADO DE LECTURAS\n"
        this.values.forEach(element => {//Le puedo pasar a una funcion otra funcion como parametro, suelen ser anonimas
            listado +=  (element.toStr() + "\n")
        });
        return listado
    }
    filtrar_temperaturas(val_max){
        let listado = "LISTADO DE TEMPERATURAS\n\n"
        const filtrados = this.values.filter(e => e.temperatura <= val_max)
        filtrados.forEach(e=> {
            listado += e.toStr() + "\n"
        })
        return listado
    }
}

//para elegir que exporto: export(funcion1, funcion2, ...)