function Centro(nombre,procesa){
    this.nombre=nombre;
    this.procesa=procesa;
    this.paquetesSinProcesar=[];
    this.paquetesProcesados=[];

    this.agregarPaquetes=function(paquete){
        if(this.paquetesProcesados.length<procesa){
            this.paquetesProcesados.push(paquete);
            this.paquetesProcesados.sort(((a, b) => a.urgencia - b.urgencia));
        }else{
            this.paquetesSinProcesar.push(paquete);
        }
    }

}

module.exports=Centro;