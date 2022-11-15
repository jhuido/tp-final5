function Mapa(locales,destinos,colaEsperas,centros){
    this.locales=locales;
    this.destinos=destinos;
    this.centros=centros;
    const filas=locales.lenght;
    this.mapa=asignar(colaEsperas);

    function asignar(colaEsperas){
        const mapa=[];
        colaEsperas.forEach(element => {
            mapa.push([0,element]);
        });

        return mapa;
        
    }
}

module.exports=Mapa;