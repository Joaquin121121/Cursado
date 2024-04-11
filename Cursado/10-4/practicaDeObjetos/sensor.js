export class SensorValue {
    constructor(id,temp,humedad,hora){
        this.id = id
        this.temperatura = temp
        this.humedad = humedad
        this.hora = hora

    }
    toStr(){
        return `ID: ${this.id}\t Temperatura: ${this.temperatura}\t Humedad: ${this.humedad}\t Hora: ${this.hora}`
    }

}

export default SensorValue
