function Mapa(colasEsperas,filas){
    this.locales=locales;
    this.destinos=destinos;
    this.filas=locales.lenght;
    this.mapa=[];
    asignar(colaEsperas);

    function asignar(colaEsperas){
        for(i=0;i<this.filas;i++){
            this.mapa[i]=[];
            colaEsperas.forEach(col => {
                this.mapa[i].push([0,col]); //paquetes y capacidad
            });
        }
    }
}

module.exports=Mapa;