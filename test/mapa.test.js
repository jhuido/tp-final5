const Centro = require("../src/Centro");
const Destino = require("../src/Destino");
const Local = require("../src/Local");
const Mapa = require("../src/Mapa");

var mapa;
beforeEach(()=>{
    const local=new Local("A");
    const destino=new Destino(1);
    const facturacion=new Centro("Facturacion",3);
    const calidad=new Centro("Calidad",5);
    const distribucion=new Centro("Distribucion",6);
    const centros=[facturacion,calidad,distribucion];
    const locales=[local];
    const destinos=[destino];
    const colaEsperas=[3,4,5];
    mapa=new Mapa(locales,destinos,colaEsperas,centros);
})

test("Crear mapa",()=>{
    expect(mapa.locales.length).toBe(1);
    expect(mapa.mapa[0]).toBe(0);
})

test("Paquete en cola de salida",()=>{
    console.log(mapa);
    mapa.localGenerePaquete(mapa.locales[0],[[mapa.destinos[0],2]]);
    console.log(mapa);
    expect(mapa.mapa[0]).toBe(2);
    expect(mapa.locales[0].coladeSalida.length).toBe(2);
})

test("Mover paquetes",()=>{
    console.log(mapa);
    mapa.localGenerePaquete(mapa.locales[0],[[mapa.destinos[0],2]]);
    mapa.moverPaquetes();
    expect(mapa.mapa[0]).toBe(0);
    expect(mapa.mapa[1][0]).toBe(2);
    console.log(mapa.centros[0].paquetes);
    expect(mapa.centros[0].paquetes[0].tiempo).toBe(1);

    mapa.moverPaquetes();
    console.loh(mapa);
    expect(mapa.mapa[0]).toBe(0);
    expect(mapa.mapa[1][0]).toBe(0);
    expect(mapa.mapa[2][0]).toBe(2);


})


