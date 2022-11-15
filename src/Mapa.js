function Mapa(locales,destinos,colaEsperas,centros){
    this.locales=locales;
    this.destinos=destinos;
    this.centros=centros;
    this.filas=destinos.lenght;
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
        this.mapa[0]+=destinos[0][1];
    }
}

module.exports=Mapa;