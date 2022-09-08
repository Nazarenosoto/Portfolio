    //PRIMERA PREENTREGA

alert(`Hola!`)
do{
    let preguntA = prompt("¿Cuantos años tenés?")
    if(preguntA.toLowerCase() >= "18"){
        console.log("El usuario es mayor de edad y tiene " + preguntA + " años")
        condicion = true 
        alert(`Te doy la bienvenida a la vinoteca`
        )
    }else{
        console.log("El usuario es menor de edad y tiene " + preguntA + " años")
        condicion = false
        alert(`Lo siento, vuelve cuando tengas mas de 18 años`)
    }
}while((condicion) && (condicion >=18))



const misProductos = [
    {
        nombre: "Vodka smirnoff $2500",
    },
    {
        nombre: "Vodka Skyy Raspberry $1800",
    },
    {
        nombre: "Fernet Branca $1800",
    },
    {
        nombre: "Absolut Vodka",
    }
    ];
const productosTerminados = []

function initApp(){
    let ingresar = confirm("¿Que desea comprar?");

    while(ingresar){
        const compraAFinalizar = prompt(` ${mostrarProductos()} \n Ingrese los productos a comprar`)
        finalizarCompra(compraAFinalizar)

        if(misProductos.length){
            ingresar = false;
        }
    }
    alert("Muy bien, vuelva pronto!")
}
initApp();

function mostrarProductos(){
    let listaProducto = "";

    for(compra of misProductos){
        listaProducto += `${compra.nombre}`
    }

    if(misProductos.length){
        return "Mis productos : \n" + misProductos.join("\n")
    }else{
        return "No tenemos lo que buscas"
    }
}

function finalizarCompra(compra){
    const index = misProductos.indexOf(compra)

    if(index != -1){
        productosTerminados.push(compra);
        misProductos.splice(index, 1)
        console.log("productosTerminados", productosTerminados)
    }else{
        alert("Producto no encontrado")
    }
}


