

function Paquete(destino,urgencia){
    this.tiempo=0;
    this.destino=destino;
    this.urgencia=urgencia;

    this.aumentarTiempo=function(){
        this.tiempo++;
    }
}
module.exports=Paquete;