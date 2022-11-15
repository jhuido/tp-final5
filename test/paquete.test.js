const Destino = require("../src/Destino");
const Local = require("../src/Local");

test("Crear Paquete",()=>{
    const local=new Local("A");
    const destino=new Destino(1);
    const paquete=local.generePaquete(destino);
    expect(paquete.tiempo).toBe(0);
})