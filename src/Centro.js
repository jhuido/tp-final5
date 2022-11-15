function Centro(nombre,procesa){
    this.nombre=nombre;
    this.procesa=procesa;
    this.paquetes=[];

    this.agregarPaquetes=function(paquetes){

        paquetes.forEach(paquete => {
            this.paquetes.push(paquete);
        });
    }

    this.getPaquetes=function(){
        return this.paquetes;
    }

    this.quitarPaquetes=function(paquetes){
        paquetes.forEach(paquete => {
            var index=this.paquetes.findIndex(element=>element==paquete)
            if(index!=-1){
                this.paquetes.splice(index,1);
            }
        });
    }
}

module.exports=Centro;