function Destino(nombre){
    this.nombre=nombre;
    this.paquetes=[];

    this.recibePaquetes=function(paquete){
        this.paquetes.push(paquete);
    }
}
module.exports=Destino;