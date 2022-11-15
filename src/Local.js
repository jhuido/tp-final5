const Mapa = require("./Mapa");
const Paquete = require("./Paquete");

function Local(nombre){
    this.nombre=nombre;
    this.coladeSalida=[];

    this.generePaquete=function(destinos){
        destinos.forEach(destino => {
            for(i=0;i<destino[1];i++){
                const paquete=new Paquete(destino[0]);
                this.coladeSalida.push(paquete);
            }
        });
    }
}

module.exports=Local;