class Persona {
    constructor(nombre, correo, profesion, fechaNacimiento) {
    this.nombre = nombre;
    this.correo = correo;
    this.profesion = profesion;
    this.fechaNacimiento = fechaNacimiento;
    }
    saludar() {
    console.log('Hola soy ' + this.nombre);
    }
    edad() {
    const hoy = new Date();
    return hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    }
    }

const yo = new Persona("Joaquin", "aa@gmail.com", "ing en sistemas", "2004-06-07T23:41:53.102Z");
console.log(yo.saludar());