alert(`¿No sabés multiplicar?`)
alert(`Tranqui, yo te ayudo`)
let numeroMultiplicar = parseInt(prompt('Ingresá un numero que quieras multiplicar'))
let numerolimite = parseInt(prompt("¿Hasta donde querés multiplicarlo?"))
for(let i = 0; i <= numerolimite;i++){
    let Multiplicacion = numeroMultiplicar * i
    console.log(`${numeroMultiplicar} x ${i} = ${Multiplicacion}`)
}
//Ciclos condicionales

let condicion = true
let contador = 0
alert(`Bueno, ahora decime`)
do{
    let preguntA = prompt("Cuantas libertadores tiene boca?")
    if(preguntA.toLowerCase() == "6"){
        console.log("Bien ahí chee")
        condicion = false 
        alert(`bien ahí!!!!!`)
    }else{
        contador=contador + 1
        console.log("noup, volvé 5 intentarlo. intento n°" + contador)
        alert(`Noo, volvé a intentarlo. intento n°` + contador)
    }
    
}while((condicion) && (contador < 10))