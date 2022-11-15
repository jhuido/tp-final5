function Mapa(locales,destinos,colaEsperas,centros){
    this.locales=locales;
    this.destinos=destinos;
    this.centros=centros;
    this.filas=locales.length;
    this.mapa=asignar(colaEsperas);

    function asignar(colaEsperas){
        const linea=[];
        linea[0]=0;
        colaEsperas.forEach(element => {
            linea.push([0,element]);
        });
        return linea;
        

    }

    this.localGenerePaquete=function(local,infoPaquetes){
        local.generePaquete(infoPaquetes);
        this.mapa[0]+=infoPaquetes.length;
    }

    this.moverPaquetes=function(){
        var columnas=this.mapa.length;
        for(i=columnas-1;i>=0;i--){
            if(i==0){
                var paquetes=this.locales[0].coladeSalida;
                paquetes.forEach(paquete => {
                    paquete.aumentarTiempo();
                });
                this.centros[0].agregarPaquetes(paquetes);
                this.mapa[i+1][0]=this.mapa[i];
                this.mapa[i]=0;
            }else if(i==columnas-1 && this.mapa[i][0]>0){
                var paquetes=this.centros[i-1].getPaquetes();
                this.destinos[0].recibePaquetes(paquetes);
                this.centros[i-1].quitarPaquetes(paquetes);
                this.mapa[i][0]=0;
            }else if(this.mapa[i][0]>0){
                var paquetes=this.centros[i-1].getPaquetes();
                this.centros[i].agregarPaquetes(paquetes);
                this.centros[i-1].quitarPaquetes(paquetes);
                this.mapa[i+1][0]+=this.mapa[i][0];
                this.mapa[i][0]=0;
            }
        }
    };
}

module.exports=Mapa;