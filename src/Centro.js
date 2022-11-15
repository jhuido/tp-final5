function Centro(nombre,procesa){
    this.nombre=nombre;
    this.procesa=procesa;
    this.paquetesSinProcesar=[];
    this.paquetesProcesados=[]

    this.agregarPaquetes=function(paquetes){
        var paquetesNuevos=[]
        paquetes.forEach(paquete => {
            paquetesNuevos.push(paquete);
        });
        var i=0;
        paquetesNuevos.forEach(element => {
            if(i<procesa){
                this.paquetesProcesados.push(element);
                i++;
            }else{
                this.paquetesSinProcesar.push(element);
            }
        });

    }

    this.getPaquetes=function(){
        return this.paquetesProcesados;
    }

    this.quitarPaquetes=function(paquetes){
        paquetes.forEach(paquete => {
            paquete.aumentarTiempo();
            var index=this.paquetesProcesados.findIndex(element=>element==paquete)
            if(index!=-1){
                this.paquetesProcesados.splice(index,1);
            }
            if(this.paquetesSinProcesar.length>0){
                while(this.paquetesProcesados.lenght<=procesa){
                    this.paquetesProcesados.push(this.paquetesSinProcesar.pop());
                }
            }
        });
    }
}

module.exports=Centro;