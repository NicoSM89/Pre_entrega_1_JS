
let numeros = []
let i = 1
while (i <= 5) {
    let numero = parseInt(prompt('Ingresa otro numero'))
    numeros.push(numero)
    i++
}

let numeroPregunta = parseInt(prompt('Que numero quieres averiguar?'))

let existeNumero = numeros.includes(numeroPregunta) 
let indice = numeros.indexOf(numeroPregunta)

if (existeNumero) {
    alert('El numero ingresado se encuentra en la posicion ${indice}')
} else {
    alert('El numero ingresado no esta en este arreglo')
}


