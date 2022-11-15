function Mapa(locales,destinos,colaEsperas,centros){
    if(locales.length!=destinos.length){
        throw new Error("Debe haber misma catidad de locales que de destino");
    }
    if(locales.length>centros.length+1){ // el +1 es porque estamos contando la cola de salida del local
        throw new Error("Columnas debe ser mayor o igual a cantidad de locales");
    }
    this.locales=locales;
    this.destinos=destinos;
    this.centros=centros;
    this.filas=locales.length;
    this.columnas=parseInt((centros.length)+1);
    this.mapa=asignar(colaEsperas);

    function asignar(colaEsperas){
        var mapa=[]
        var i;
        for(i=0;i<colaEsperas.length;i++){
            var linea=[];
            linea[0]=0;
            colaEsperas[i].forEach(element => {
                linea.push([0,element]);
            }); 
            mapa.push(linea);
        }
        return mapa;

    }

    this.localGenerePaquete=function(local,infoPaquetes){
        var index=this.locales.findIndex(element=>element==local);
        if(infoPaquetes.length>5){
            throw new Error("Local puede producir hasta 5 paquetes");
        }
        local.generePaquete(infoPaquetes);
        this.mapa[index][0]+=infoPaquetes.length;
    }

    this.moverPaquetes=function(){
        var j,i;
        var paquete;
        for(i=0;i<this.filas;i++){
            for(j=this.columnas-1;j>=0;j--){
                if(j==(this.columnas-1) && this.mapa[i][j][0]>0){  //si esta en la ultima instancia
                    paquete=this.centros[j-1].paquetesProcesados.pop();
                    paquete.aumentarTiempo();
                    this.destinos[i].recibePaquetes(paquete);
                    this.mapa[i][j][0]=0;
                }else if(j==0){ // si esta en la cola de salida de algun local
                    paquete=this.locales[i].coladeSalida.pop();
                    paquete.aumentarTiempo();
                    this.centros[j].agregarPaquetes(paquete);
                    while(this.mapa[i][j]>0){
                        while(this.mapa[i][j+1][0]<this.mapa[i][j+1][1]){ // pasar a arriba diagonal
                            this.mapa[i][j+1][0]+=1;
                        }
                        if(i>1){ // si no esta en la primera fila
                            while(this.mapa[i-1][j+1][0]<this.mapa[i-1][j+1][1]){
                                this.mapa[i-1][j+1][0]+=1;
                            }
                        } 
                        if(i<this.filas-1){ // si no esta en la ultima fila
                            while(this.mapa[i][j]>0 && this.mapa[i+1][j+1][0]<this.mapa[i+1][j+1][1]){
                                this.mapa[i+1][j+1][0]+=1;
                            }
                        }
                    this.mapa[i][j]-=1;
                }

                }else if(j>0 && j<this.columnas-1 && this.mapa[i][j][0]>0){ // si esta entre los centros
                    while(this.mapa[i][j][0]>0 && this.mapa[i][j+1][0]<this.mapa[i][j+1][1]){
                        paquete=this.centros[j-1].paquetesProcesados.pop();
                        paquete.aumentarTiempo();
                        this.centros[j].agregarPaquetes(paquete);
                        this.mapa[i][j+1][0]+=this.mapa[i][j][0];
                        this.mapa[i][j][0]=0;
                    }
                    if(i>1){ // si no esta en la primera fila
                        while(this.mapa[i][j]>0 && this.mapa[i-1][j+1][0]<this.mapa[i-1][j+1][1]){
                            paquete=this.locales[i].coladeSalida.pop();
                            paquete.aumentarTiempo();
                            this.centros[j].agregarPaquetes(paquete);
                            this.mapa[i-1][j+1][0]+=1;
                            this.mapa[i][j][0]-=1;
                        }
                    }
                    if(i<this.filas-1){ // si no esta en la ultima fila
                        while(this.mapa[i][j]>0 && this.mapa[i+1][j+1][0]<this.mapa[i+1][j+1][1]){
                            paquete=this.locales[i].coladeSalida.pop();
                            paquete.aumentarTiempo();
                            this.centros[j].agregarPaquetes(paquete);
                            this.mapa[i+1][j+1][0]+=1;
                            this.mapa[i][j][0]-=1;
                        }
                    }
                }
            }
        }
        
    };
}

module.exports=Mapa;