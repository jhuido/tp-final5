function Destino(nombre){
    this.nombre=nombre;
    this.paquetes=[];

    this.recibePaquetes=function(paquetes){
        paquetes.forEach(paquete => {
            this.paquetes.push(paquete);
        });
    }
}
module.exports=Destino;