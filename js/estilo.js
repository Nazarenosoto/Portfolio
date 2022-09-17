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
        Producto.innerHTML = `<div class="container">
        <div class="row productoss">
        <div class="producto col-md-4 col-lg-3 col-sm-1">
        <img src="./img/cards/Ropa-del-usuario.jpg" alt="Remera deportiva Nike" class="imagenes">
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
</div>
        `
    });
    listProduc.appendChild(Producto)
}

