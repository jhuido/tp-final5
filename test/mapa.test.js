const Centro = require("../src/Centro");
const Destino = require("../src/Destino");
const Local = require("../src/Local")

test("Crear mapa",()=>{
    const local=new Local("A");
    const destino=new Destino(1);
    const facturacion=new Centro("Facturacion",3);
    const calidad=new Centro("Calidad",5);
    const distribucion=new Centro("Distribucion",6);
    const centros=[facturacion,calidad,distribucion];
    const locales=[local];
    const colaEsperas=[3,4,5];
    const mapa=new Mapa(colasEsperas,locales.length);
    expect(mapa[0].length).toBe(colaEsperas.length+1);
    expect(mapa[0][0][1]).toBe(3);
})