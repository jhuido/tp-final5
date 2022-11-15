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
    const locales=[new Local("A"),new Local("B")];
    const destinos=[new Destino(1),new Destino(2)];
    const colaEsperas=[[3,4,5],[4,3,5]];
    mapa=new Mapa(locales,destinos,colaEsperas,centros);
})

test("Crear mapa",()=>{
    expect(mapa.locales.length).toBe(2);
    expect(mapa.mapa[0][0]).toBe(0);
    expect(mapa.mapa[1][0]).toBe(0);
    expect(mapa.mapa[0][1][0]).toBe(0);
    expect(mapa.mapa[0][2][0]).toBe(0);
    expect(mapa.mapa[0][3][0]).toBe(0);
    //const colaEsperas=[[3,4,5],[4,3,5]];
    expect(mapa.mapa[0][1][1]).toBe(3);
    expect(mapa.mapa[0][2][1]).toBe(4);
    expect(mapa.mapa[0][3][1]).toBe(5);
    expect(mapa.mapa[1][1][1]).toBe(4);
    expect(mapa.mapa[1][2][1]).toBe(3);
    expect(mapa.mapa[1][3][1]).toBe(5);
})

test("Paquete en cola de salida",()=>{
    mapa.localGenerePaquete(mapa.locales[0],[[mapa.destinos[0],4],[mapa.destinos[0],5]]);
    expect(mapa.mapa[0][0]).toBe(2);
    expect(mapa.locales[0].coladeSalida.length).toBe(2);
})

test("Mover paquetes",()=>{
    mapa.localGenerePaquete(mapa.locales[0],[[mapa.destinos[0],4],[mapa.destinos[0],5]]);
    console.log(mapa.mapa);
    
    mapa.moverPaquetes();
    
    console.log("\n>>>>>>MOVIENDO PAQUETE<<<<<<<<<\n")
    console.log(mapa.mapa);
    
    expect(mapa.mapa[0][0]).toBe(0);
    expect(mapa.mapa[0][1][0]).toBe(2);
    expect(mapa.centros[0].paquetes[0].tiempo).toBe(1);
    /*
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
    */

})
/*
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

test("Haya misma cantidad de locales que de destinos",()=>{
    var locales2=[new Local("A"),new Local("B")];
    var destinos1=[new Destino(1)];
    expect(()=>new Mapa(locales2,destinos1)).toThrow("Debe haber misma catidad de locales que de destino");

})

test("Cantidad de columnas mayor o igual a filas",()=>{
    var locales2=[new Local("A"),new Local("B"),new Local("C")];
    var destinos2=[new Destino(1),new Destino(2),new Destino(3)];
    var centros1=[new Centro("Facturacion",4)];
    expect(()=>new Mapa(locales2,destinos2,[1],centros1)).toThrow("Columnas debe ser mayor o igual a cantidad de locales");

})
*/

test("Mapa tiene más de una fila",()=>{
    var locales2=[new Local("A"),new Local("B")];
    var destinos2=[new Destino(1),new Destino(2)];
    var centros2=[new Centro("Facturacion",3),new Centro("Calidad",5),new Centro("Distribucion",4)];
    var mapa=new Mapa(locales2,destinos2,[[4,3,5],[3,7,5]],centros2);
    expect(mapa.mapa[0][1][1]).toBe(4);
    expect(mapa.mapa[0][2][1]).toBe(3);
    expect(mapa.mapa[0][3][1]).toBe(5);
    expect(mapa.mapa[1][1][1]).toBe(3);
    expect(mapa.mapa[1][2][1]).toBe(7);
    expect(mapa.mapa[1][3][1]).toBe(5);
})


