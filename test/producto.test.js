const Producto=require("../src/Producto");

test("Crear Producto",()=>{
    const tornillo=new Producto("Tornillo");
    expect(tornillo.nombre).toBe("Tornillo");
})
