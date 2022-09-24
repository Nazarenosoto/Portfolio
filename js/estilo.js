//Loader
window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector ('.contenedor_loader')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
    console.log("La pagina ha iniciado")
})

//Termina Loader

//Subir productos
const product = []
let idSolit = 0
class Products{
    constructor(Producto){
        this.Producto = Producto
        this.id = idSolit++
    }
}

const inputProduc = document.getElementById('inputProduc')
const btnProduc = document.getElementById('btnProduc')
const borrarTodo = document.getElementById('borrarTodo')
const listProduc = document.getElementById('listProduc')

btnProduc.addEventListener('click', () =>{
    product.push(new Products(inputProduc.value))
    console.log(product)
    crearProducto()
})

function crearProducto() {
    const Producto = document.createElement('div')
    product.forEach( (x) => {
        Producto.innerHTML = `
        <div class="row productoss">
        <div class="producto col-md-4 col-lg-3 col-sm-1">
        <img src="./img/cards/Ropa-del-usuario.jpg" alt="${x.Producto}" class="imagenes">
        <div class="informacion">
            <span class="tipo-envio">Envio con normalidad</span>
            <span class="costo-envio">Envio gratis</span>
            <span class="prenda">${x.Producto}</span>
            <div class="calificacion">
                <p class="ppp2">⋆⋆⋆⋆⋆</p>
            </div>
            <a href="#" class="aa">Contactar</a>
            <a href="#" class="carrito compra" id="envento">Agregar al carrito de compras</a>
        </div>
    </div>
    </div>
        `
    });
    listProduc.appendChild(Producto)
}

//Productos
class Ropita{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
    mostrarDatos(){
        console.log(`El nombre es ${this.nombre} y su precio es ${this.precio}`)
    }
}


const Ropa1 = new Ropita("Remera deportiva Nike", 2800)
const Ropa2 = new Ropita("Remera deportiva Adidas", 3200)
const Ropa3 = new Ropita("Remera deportiva Puma", 2800)
const Ropa4 = new Ropita("Buzo Simple", 1500)
const Ropa5 = new Ropita("Buzo Bordado", 4500)
const Ropa6 = new Ropita("Buzo Hollister", 5200)

const stockProducts = []
stockProducts.push(Ropa1,Ropa2,Ropa3,Ropa4,Ropa5,Ropa6)
localStorage.setItem("Products", JSON.stringify(stockProducts))

//Carrito de compras

//Sumar Productos
function compraTotal(array){
    let acumulador = 0

    acumulador = array.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito
    })
}