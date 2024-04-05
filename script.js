function resultado(){
    var altura = document.getElementById(`height`).value
    var peso = document.getElementById(`weight`).value
    var imc = peso / (altura * altura)
    var textoimc = document.getElementById(`resultado`).innerHTML = `${imc.toFixed(2)} IMC`
    var tamanho = document.getElementById(`container`)
    

    if(imc <= 18.5){
        document.getElementById(`indice`).innerText = `Vocé está abaixo do peso ideal`
        document.getElementById(`resultado`).style.backgroundColor = "blue"
        document.getElementById(`resultbox`).style.display = "flex"
    }else if (imc > 18.6 & imc <= 24.9 ) {
        document.getElementById(`indice`).innerText = `Vocé está no peso ideal`
        document.getElementById(`resultado`).style.backgroundColor = "#00b208"
        document.getElementById(`resultbox`).style.display = "flex"
    }
    else if (imc > 25 & imc <= 29.9 ) {
        document.getElementById(`indice`).innerText = `Vocé está levemente acima do peso`
        document.getElementById(`resultado`).style.backgroundColor = "#8cad07"
        document.getElementById(`resultbox`).style.display = "flex"
    }else if (imc > 30 & imc <= 34.9 ) {
        document.getElementById(`indice`).innerText = `Vocé está com obesidade de grau I`
        document.getElementById(`resultado`).style.backgroundColor = "#996b00"
        document.getElementById(`resultbox`).style.display = "flex"
    }
    else if (imc > 35 & imc <= 39.9 ) {
        document.getElementById(`indice`).innerText = `Vocé está com obesidade de grau II (Severa)`
        document.getElementById(`resultado`).style.backgroundColor = "#eb4710"
        document.getElementById(`resultbox`).style.display = "flex"
    }else {
        document.getElementById(`indice`).innerText = `Vocé está com obesidade de grau III (Mórbida)`
        document.getElementById(`resultado`).style.backgroundColor = "#a60000"
        document.getElementById(`resultbox`).style.display = "flex"
}

}
