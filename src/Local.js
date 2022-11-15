const Mapa = require("./Mapa");
const Paquete = require("./Paquete");

function Local(nombre){
    this.nombre=nombre;
    this.coladeSalida=[];

    this.generePaquete=function(destinos,mapa){
        destinos.forEach(destino => {
            const paquete=new Paquete(destino);
            this.coladeSalida.push(paquete);
        });
        mapa.agregarPaquete(this,destinos.lenght);
        return paquete;
    }
}

module.exports=Local;