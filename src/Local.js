const Paquete = require("./Paquete");

function Local(nombre){
    this.nombre=nombre;

    this.generePaquete=function(destino){
        const paquete=new Paquete(destino);
        return paquete;
    }
}

module.exports=Local;