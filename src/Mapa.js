function Mapa(locales,destinos,colaEsperas,centros){
    this.locales=locales;
    this.destinos=destinos;
    this.centros=centros;
    const filas=locales.lenght;
    this.mapa=[];
    asignar(colaEsperas);

    function asignar(colaEsperas){
        for(i=1;i<this.filas;i++){
            this.mapa[i]=new Array(this.centros.lenght+1);
            this.mapa[i][0]=[0];
            colaEsperas.forEach(col => {
                this.mapa[i].push([0,col]); //paquetes y capacidad
            });
            console.log("\n fila "+i+"--> "+this.mapa[i]);
        }
    }
}

module.exports=Mapa;