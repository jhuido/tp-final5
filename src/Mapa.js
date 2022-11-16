const Centro=require("../src/Centro");

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
    this.columnas=(centros.length);
    this.mapa=asignar(colaEsperas,centros);

    function asignar(colaEsperas,centros){
        var mapa=[]
        var i;
        for(i=0;i<colaEsperas.length;i++){
            var linea=[];
            linea[0]=0;
            j=0;
            colaEsperas[i].forEach(element => {
                const centroAsig = new Centro(centros[j].nombre,centros[j].procesa);
                linea.push([0,element,centroAsig]);
                j++;
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
        var index;
        for(i=0;i<this.filas;i++){
            for(j=this.columnas-1;j>=0;j--){
                if(j==(this.columnas-1) && this.mapa[i][j][0]>0){  //si esta en la ultima instancia
                    //console.log("HELO");
                    //console.log( this.mapa[i][j][2]);
                    paquete=this.mapa[i][j][2].paquetesProcesados.pop();
                    while(paquete!=null){
                        paquete.aumentarTiempo();
                        //console.log(paquete);
                        //console.log(destinos[0]);
                        this.destinos[i].recibePaquetes(paquete);
                        this.mapa[i][j+1][2].agregarPaquetes(paquete);
                        this.mapa[i][j+1][0]+=1;
                        this.mapa[i][j][0]-=1;
                        paquete=this.mapa[i][j][2].paquetesProcesados.pop();


                    }   
                    
                    
                }else if(j==0){ // si esta en la cola de salida de algun local
                    while(this.mapa[i][j]>0 && this.mapa[i][j+1][0]<this.mapa[i][j+1][1]){ // pasar a arriba diagonal
                        this.mapa[i][j+1][0]+=1;
                        paquete=this.locales[i].coladeSalida.pop();
                        paquete.aumentarTiempo(); 
                        this.mapa[i][j+1][2].agregarPaquetes(paquete);
                        this.mapa[i][j]-=1;
                    }
                    if(i>1){ // si no esta en la primera fila
                        while(this.mapa[i][j]>0 && this.mapa[i-1][j+1][0]<this.mapa[i-1][j+1][1]){
                            this.mapa[i-1][j+1][0]+=1;
                            paquete=this.locales[i].coladeSalida.pop();
                            paquete.aumentarTiempo();
                            this.mapa[i][j][2].agregarPaquetes(paquete);
                            this.mapa[i][j]-=1;
                        }
                    } 
                    if(i<this.filas-1){ // si no esta en la ultima fila
                        while(this.mapa[i][j]>0 && this.mapa[i+1][j+1][0]<this.mapa[i+1][j+1][1]){
                            this.mapa[i+1][j+1][0]+=1;
                            paquete=this.locales[i].coladeSalida.pop();
                            paquete.aumentarTiempo();
                            this.mapa[i][j+1][2].agregarPaquetes(paquete);
                            this.mapa[i][j]-=1;
                        }
                    }
                }else if(j>=1 && j<this.columnas-1 && this.mapa[i][j][0]>0){ // si esta entre los centros
                    while(this.mapa[i][j][0]>0){
                        paquete=this.mapa[i][j][2].paquetesProcesados.pop();
                        paquete.aumentarTiempo(); 
                        index=this.destinos.findIndex(element=>element==paquete.destino);
                        this.mapa[i][j][0]-=1;
                        console.log(paquete);
                        console.log("INDICEEEEEE ---> "+index);
                        }else if(index<i){
                            this.mapa[i-1][j+1][2].agregarPaquetes(paquete);
                            this.mapa[i-1][j+1][0]+=1;
                        }else if(index==i){
                            this.mapa[i][j+1][2].agregarPaquetes(paquete);
                            this.mapa[i][j+1][0]+=1;
                        }else if(index>i){
                            this.mapa[i+1][j+1][2].agregarPaquetes(paquete);
                            this.mapa[i+1][j+1][0]+=1;
                        }
                    }
                    /*
                    while(this.mapa[i][j][0]>0 && this.mapa[i][j+1][0]<this.mapa[i][j+1][1]){

                        paquete=this.mapa[i][j][2].paquetesProcesados.pop();
                        paquete.aumentarTiempo(); 
                        this.mapa[i][j+1][2].agregarPaquetes(paquete);
                        this.mapa[i][j+1][0]+=1;
                        this.mapa[i][j][0]-=1;
                    

                    }
                    if(i>1){ // si no esta en la primera fila
                        while(this.mapa[i][j]>0 && this.mapa[i-1][j+1][0]<this.mapa[i-1][j+1][1]){
                            paquete=this.mapa[i][j][2].paquetesProcesados.pop();
                            paquete.aumentarTiempo(); 
                            this.mapa[i][j+1][2].agregarPaquetes(paquete);
                            //
                            // paquete=this.mapa[i][j][2].paquetesProcesados.pop();
                            // paquete.aumentarTiempo();
                            // this.mapa[i-1][j+1][2].agregarPaquetes(paquete);
                            this.mapa[i-1][j+1][0]+=1;
                            this.mapa[i][j][0]-=1;
                        }
                    }
                    if(i<this.filas-1){ // si no esta en la ultima fila
                        while(this.mapa[i][j]>0 && this.mapa[i+1][j+1][0]<this.mapa[i+1][j+1][1]){
                            paquete=this.mapa[i][j][2].paquetesProcesados.pop();
                            paquete.aumentarTiempo();
                            this.mapa[i+1][j+1][2].agregarPaquetes(paquete);
                            this.mapa[i+1][j+1][0]+=1;
                            this.mapa[i][j][0]-=1;
                        }
                    }*/
                }
            }
        }
        
    };
}

module.exports=Mapa;