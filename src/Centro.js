function Centro(nombre,procesa){
    this.nombre=nombre;
    this.procesa=procesa;
    this.paquetesSinProcesar=[];
    this.paquetesProcesados=[]

    this.agregarPaquetes=function(paquetes){
        if(this.paquetesProcesados.length<procesa){
            this.paquetesProcesados.push(element);
        }else{
            this.paquetesSinProcesar.push(element);
        }
    }

}

module.exports=Centro;