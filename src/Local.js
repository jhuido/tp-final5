const Mapa = require("./Mapa");
const Paquete = require("./Paquete");

function Local(nombre){
    this.nombre=nombre;
    this.coladeSalida=[];

    this.generePaquete=function(infoPaquetes){
        if(infoPaquetes.length>5){
            throw new Error("Local puede producir hasta 5 paquetes");
        }
        infoPaquetes.forEach(info => {
            var paquete=new Paquete(info[0],info[1],info[2]);
            this.coladeSalida.push(paquete);
        });
    }
}

module.exports=Local;