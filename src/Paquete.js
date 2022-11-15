

function Paquete(destino,urgencia){
    this.tiempo=0;
    this.destino=destino;
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