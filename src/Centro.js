function Centro(nombre,procesa){
    this.nombre=nombre;
    this.procesa=procesa;
    this.paquetes=[];

    this.agregarPaquetes=function(paquetes){

        paquetes.forEach(paquete => {
            this.paquetes.push(paquete);
        });
    }
}

module.exports=Centro;