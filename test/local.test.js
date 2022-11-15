const Local=require("../src/Local");

test("Crear Local",()=>{
    const local=new Local("A");
    expect(local.nombre).toBe("A");
})