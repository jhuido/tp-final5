const Mapa = require("./Mapa");
const Paquete = require("./Paquete");

function Local(nombre){
    this.nombre=nombre;
    this.coladeSalida=[];

    this.generePaquete=function(infoPaquetes){
        infoPaquetes.forEach(info => {
            var paquete=new Paquete(info[0],info[1],info[2]);
            this.coladeSalida.push(paquete);
        });
    }

    this.quitarPaquetes=function(paquetes){
        var index;
        paquetes.forEach(element => {
            index=this.coladeSalida.findIndex(paquete=>paquete==element);
            if(index!=-1){
                this.coladeSalida.splice(index,1);
            }
        });
    }
}

module.exports=Local;