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
}

module.exports=Mapa;