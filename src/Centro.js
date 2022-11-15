function Centro(nombre,procesa){
    this.nombre=nombre;
    this.procesa=procesa;
    this.paquetes=[];

    this.agregarPaquetes=function(paquetes){
        this.paquetes.push(paquetes);
    }
}

module.exports=Centro;