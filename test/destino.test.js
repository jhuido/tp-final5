
const Destino=require("../src/Destino");

test("Crear Destino",()=>{
    const destino=new Destino(1);
    expect(destino.nombre).toBe(1);
})