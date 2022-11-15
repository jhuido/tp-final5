function Mapa(locales,destinos,colaEsperas,centros){
    this.locales=locales;
    this.destinos=destinos;
    this.centros=centros;
    const filas=locales.lenght;
    this.mapa=asignar(colaEsperas);

    function asignar(colaEsperas){
        const mapa=[];
        filas.forEach(fila => {
            const linea=[];
            linea[0]=0;
            colaEsperas.forEach(element => {
                linea.push([0,element]);
            });
            mapa.push(linea);
        });

        return mapa;
        
    }
}

module.exports=Mapa;