function Mapa(locales,destinos,colaEsperas,centros){
    this.locales=locales;
    this.destinos=destinos;
    this.centros=centros;
    this.filas=locales.lenght;
    this.mapa=asignar(colaEsperas);

    function asignar(colaEsperas){
        const linea=[];
        linea[0]=0;
        colaEsperas.forEach(element => {
            linea.push([0,element]);
        });
        return linea;
        
    }

    this.localGenerePaquete=function(local,destinos){
        local.generePaquete(destinos);
        var num=0;
        destinos.forEach(destino => {
            num+=destino[1];
        });
        this.mapa[0]+=num;
    }

    this.moverPaquetes=function(){
        var columnas=this.mapa.lenght;
        console.log("COLUMNAS: "+columnas);
        for(i=columnas-2;i>=0;i--){
            if(i==0){
                this.centros[0].agregarPaquetes(this.locales[0].colaEsperas);
                this.mapa[i+1][0]=this.mapa[i];
                this.mapa[i]=0;
            }
            else if(this.mapa[i][0]>0){
                var paquetes=this.centros[i-1].getPaquetes();
                this.centros[i].agregarPaquetes(paquetes);
                this.mapa[i+1][0]=this.mapa[i];
                this.mapa[i][0]=0;
            }
        }
    };
}

module.exports=Mapa;