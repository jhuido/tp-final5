

function Paquete(destino){
    this.tiempo=0;
    this.destino=destino;

    this.aumentarTiempo=function(){
        this.tiempo++;
    }
}
module.exports=Paquete;