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
    mapa.localGenerePaquete(mapa.locales[0],[[mapa.destinos[0],4],[mapa.destinos[0],5]]);
    expect(mapa.mapa[0]).toBe(2);
    expect(mapa.locales[0].coladeSalida.length).toBe(2);
})

test("Mover paquetes",()=>{
    mapa.localGenerePaquete(mapa.locales[0],[[mapa.destinos[0],4],[mapa.destinos[0],5]]);
    mapa.moverPaquetes();
    expect(mapa.mapa[0]).toBe(0);
    expect(mapa.mapa[1][0]).toBe(2);
    expect(mapa.centros[0].paquetes[0].tiempo).toBe(1);

    mapa.moverPaquetes();
    expect(mapa.mapa[0]).toBe(0);
    expect(mapa.mapa[1][0]).toBe(0);
    expect(mapa.mapa[2][0]).toBe(2);
    expect(mapa.centros[1].paquetes[0].tiempo).toBe(2);

    mapa.moverPaquetes();
    expect(mapa.mapa[0]).toBe(0);
    expect(mapa.mapa[1][0]).toBe(0);
    expect(mapa.mapa[2][0]).toBe(0);
    expect(mapa.mapa[3][0]).toBe(2);
    expect(mapa.centros[2].paquetes[0].tiempo).toBe(3);

})

test("Paquetes lleguen a destino",()=>{
    mapa.localGenerePaquete(mapa.locales[0],[[mapa.destinos[0],4],[mapa.destinos[0],5]]);
    mapa.moverPaquetes();
    mapa.moverPaquetes();
    mapa.moverPaquetes();
    mapa.moverPaquetes();
    expect(mapa.mapa[1][0]).toBe(0);
    expect(mapa.mapa[2][0]).toBe(0);
    expect(mapa.mapa[3][0]).toBe(0);
    expect(mapa.destinos[0].paquetes[0].tiempo).toBe(4);

})

test("Local genere hasta 5 paquetes",()=>{
    expect(()=>mapa.localGenerePaquete(mapa.locales[0],[[mapa.destinos[0],4],[mapa.destinos[0],2],[mapa.destinos[0],5],[mapa.destinos[0],7],[mapa.destinos[0],4],[mapa.destinos[0],3]])).toThrow("Local puede producir hasta 5 paquetes");

})


