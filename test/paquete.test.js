const Destino = require("../src/Destino");
const Local = require("../src/Local");
const Centro = require("../src/Centro");
const Mapa= require("../src/Mapa");

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

test("Crear Paquete",()=>{
    mapa.localGenerePaquete(mapa.locales[0],[[mapa.destinos[0],4],[mapa.destinos[0],5]]);
    expect(local.coladeSalida[0].tiempo).toBe(0);
})

test("Paquete llega a tiempo?",()=>{
    mapa.localGenerePaquete(mapa.locales[0],[[mapa.destinos[0],4],[mapa.destinos[0],5]]);
    mapa.moverPaquetes();
    mapa.moverPaquetes();
    mapa.moverPaquetes();
    mapa.moverPaquetes();
    expect(mapa.destinos[0].paquetes[0].llegaATiempo()).toBe(true);
    expect(mapa.destinos[0].paquetes[1].llegaATiempo()).toBe(true);
})