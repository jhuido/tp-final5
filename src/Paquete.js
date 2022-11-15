

function Paquete(destino,urgencia,productos){
    this.tiempo=0;
    this.destino=destino;
    this.productos=productos;
    this.urgencia=urgencia;

    this.aumentarTiempo=function(){
        this.tiempo++;
    }

    this.llegoATiempo=function(){
        if(this.tiempo<=this.urgencia){
            return true;
        }else{
            return false;
        }
    }

}
module.exports=Paquete;