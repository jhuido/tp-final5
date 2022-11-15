function Centro(nombre,procesa){
    this.nombre=nombre;
    this.procesa=procesa;
    this.paquetesSinProcesar=[];
    this.paquetesProcesados=[];

    this.agregarPaquetes=function(paquete){
        if(this.paquetesProcesados.length<procesa){
            this.paquetesProcesados.push(paquete);
        }else{
            this.paquetesSinProcesar.push(paquete);
        }
    }

}

module.exports=Centro;