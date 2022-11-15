const Centro=require("../src/Centro")

test("Crear centro",()=>{
    const facturacion=new Centro("Facturacion",3);
    expect(facturacion.procesa).toBe(3);
})