function Mapa(locales,destinos,colaEsperas,centros){
    this.locales=locales;
    this.destinos=destinos;
    this.centros=centros;
    const filas=locales.lenght;
    this.mapa=asignar(colaEsperas);

    function asignar(colaEsperas){
        const mapa=[filas];
        for(i=1;i<filas;i++){
            mapa[i]=new Array(this.centros.lenght+1);
            mapa[i][0]=0;
            colaEsperas.forEach(col => {
                mapa[i].push([0,col]); //paquetes y capacidad
            });
            console.log("\n fila "+i+"--> "+mapa[i]);
        }
        return mapa;
    }
}

module.exports=Mapa;