const Centro = require("../src/Centro");
const Destino = require("../src/Destino");
const Local = require("../src/Local");
const Mapa = require("../src/Mapa");

test("Crear mapa",()=>{
    const local=new Local("A");
    const destino=new Destino(1);
    const facturacion=new Centro("Facturacion",3);
    const calidad=new Centro("Calidad",5);
    const distribucion=new Centro("Distribucion",6);
    const centros=[facturacion,calidad,distribucion];
    const locales=[local];
    const destinos=[destino];
    const colaEsperas=[3,4,5];
    const mapa=new Mapa(locales,destinos,colaEsperas,centros);
    expect(locales.length).toBe(1);
    expect(mapa.mapa[0]).toBe(0);
})

test("Paquete en cola de salida",()=>{
    const local=new Local("A");
    const destino=new Destino(1);
    const facturacion=new Centro("Facturacion",3);
    const calidad=new Centro("Calidad",5);
    const distribucion=new Centro("Distribucion",6);
    const centros=[facturacion,calidad,distribucion];
    const locales=[local];
    const destinos=[];
    destinos.push(destino);
    const colaEsperas=[3,4,5];
    const mapa=new Mapa(locales,destinos,colaEsperas,centros);
    console.log(mapa);
    mapa.localGenerePaquete(local,[[destino,2]]);
    console.log(mapa);
    expect(mapa.mapa[0]).toBe(2);
    expect(local.coladeSalida.length).toBe(2);
})

