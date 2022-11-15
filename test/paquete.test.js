const Destino = require("../src/Destino");
const Local = require("../src/Local");

test("Crear Paquete",()=>{
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
    mapa.localGenerePaquete(local,destinos);
    expect(local.coladeSalida[0].tiempo).toBe(0);
})