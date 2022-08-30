//Desafio

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


/*Funcion*/
function preguntaSecret(){
    let pregunta = prompt("¿Querés contarme un secreto? rta si o no")
    switch (pregunta){
        case "si": 
        let respuesta = "Perfecto, dime tu secreto"
        alert(respuesta)
        secretito()
        break;
        case "no": 
        let respuestaNo = "Está bien :("
        alert(respuestaNo);
        break;
        default:
        alert("Por favor responder con si o no")
        preguntaSecret()
        break;
    }}
    preguntaSecret()
    
    function secretito(){
    let secretoIntro = prompt("Escribe tu secreto")
    
    if (secretoIntro >=639){
        alert("Solo esto tenés para contar?");
    }
    
    else(
        alert ("Bien..."))
        let secret = prompt("Querés contarme otro? rta si o no")
        if (secret == "si") {
            secretito()
        }else(
            alert("Bueno mi rey, nos vemos, ¡cuidate!"))
    }
    