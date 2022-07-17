
function modoQuina(){
    document.getElementById('secJogos').style.display = 'none'
    document.getElementById('secLoteriaModoQuina').style.display = 'block'

    let numeroSorteado = Math.floor(Math.random() * (81-1) + 1)
    sorteio[0] = numeroSorteado
    let i = 1

    while (i <= 14){
let j = 0
numeroSorteado = Math.floor(Math.random() * (81-1) + 1)
while (j < i){
    if (numeroSorteado == sorteio[j]){
        numeroSorteado = Math.floor(Math.random() * (81-1) + 1)
        j = 0
    } else { j = j + 1}
}
sorteio[i] = numeroSorteado
i = i + 1
} 

}

function tenteLoteriaQuina(){
    document.getElementById("inpNumero1LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero2LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero3LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero4LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero5LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero6LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero7LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero8LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero9LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero10LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero11LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero12LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero13LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero14LoteriaQuina").style.backgroundColor = 'red'
    document.getElementById("inpNumero15LoteriaQuina").style.backgroundColor = 'red'
    let contador = 1
for (let i = 0; sorteio.length >  i; i++){
    numero1 = document.getElementById("inpNumero1LoteriaQuina").value
    numero2 = document.getElementById("inpNumero2LoteriaQuina").value
    numero3 = document.getElementById("inpNumero3LoteriaQuina").value
    numero4= document.getElementById("inpNumero4LoteriaQuina").value
    numero5 = document.getElementById("inpNumero5LoteriaQuina").value
    numero6 = document.getElementById("inpNumero6LoteriaQuina").value
    numero7 = document.getElementById("inpNumero7LoteriaQuina").value
    numero8 = document.getElementById("inpNumero8LoteriaQuina").value
    numero9 = document.getElementById("inpNumero9LoteriaQuina").value
    numero10 = document.getElementById("inpNumero10LoteriaQuina").value
    numero11 = document.getElementById("inpNumero11LoteriaQuina").value
    numero12 = document.getElementById("inpNumero12LoteriaQuina").value
    numero13 = document.getElementById("inpNumero13LoteriaQuina").value
    numero14 = document.getElementById("inpNumero14LoteriaQuina").value
    numero15 = document.getElementById("inpNumero15LoteriaQuina").value

    if (numero1 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero1LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero2 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero2LoteriaQuina").style.backgroundColor = 'green'  
    }
    if (numero3 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero3LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero4 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero4LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero5 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero5LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero6 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero6LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero7 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero7LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero8 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero8LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero9 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero9LoteriaQuina").style.backgroundColor = 'green' 
    }
    if (numero10 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero10LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero11 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero11LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero12 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero12LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero13 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero13LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero14 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero14LoteriaQuina").style.backgroundColor = 'green'
    }
    if (numero15 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero15LoteriaQuina").style.backgroundColor = 'green'
    }
    if (acertos < 2 ){
        document.getElementById('divResultadosQuina').innerHTML = 'Resultados: ' + acertos + ' acertos!'
    }
    if (acertos == 2){
        document.getElementById('divResultadosQuina').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>' +
        'Ganhou R$500,00! Levou o prêmio Duque!'
    }
    if (acertos == 3){
        document.getElementById('divResultadosQuina').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>' +
        'Ganhou R$1.000,00! Levou o prêmio Terno!'
    }
    
    if (acertos == 4){
        document.getElementById('divResultadosQuina').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>' +
        'Ganhou R$5.000,00! Levou o prêmio Quadra!'
    }
    
    if (acertos == 5){
        document.getElementById('divResultadosQuina').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>' +
        'Ganhou R$10.000,00! Levou o prêmio Quina!'
    }
    
    
    if (contador >= 1){
        document.getElementById("botaoLoteriaQuina").disabled = true;
    }
}
}

function tenteDeNovoLoteriaQuina(){
    document.getElementById("botaoLoteriaQuina").disabled = false;
    contador = 0
    acertos = 0
    let numeroSorteado = Math.floor(Math.random() * (81-1) + 1)
    sorteio[0] = numeroSorteado
    let i = 1
    
    while (i <= 14){
    let j = 0
    numeroSorteado = Math.floor(Math.random() * (81-1) + 1)
    while (j < i){
        if (numeroSorteado == sorteio[j]){
            numeroSorteado = Math.floor(Math.random() * (81-1) + 1)
            j = 0
        } else { j = j + 1}
    }
    sorteio[i] = numeroSorteado
    i = i + 1
    }

document.getElementById("inpNumero1LoteriaQuina").value = ''
document.getElementById("inpNumero2LoteriaQuina").value = ''
document.getElementById("inpNumero3LoteriaQuina").value = ''
document.getElementById("inpNumero4LoteriaQuina").value = ''
document.getElementById("inpNumero5LoteriaQuina").value = ''
document.getElementById("inpNumero6LoteriaQuina").value = ''
document.getElementById("inpNumero7LoteriaQuina").value = ''
document.getElementById("inpNumero8LoteriaQuina").value = ''
document.getElementById("inpNumero9LoteriaQuina").value = ''
document.getElementById("inpNumero10LoteriaQuina").value = ''
document.getElementById("inpNumero11LoteriaQuina").value = ''
document.getElementById("inpNumero12LoteriaQuina").value = ''
document.getElementById("inpNumero13LoteriaQuina").value = ''
document.getElementById("inpNumero14LoteriaQuina").value = ''
document.getElementById("inpNumero15LoteriaQuina").value = ''

document.getElementById("inpNumero1LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero2LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero3LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero4LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero5LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero6LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero7LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero8LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero9LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero10LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero11LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero12LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero13LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero14LoteriaQuina").style.backgroundColor = 'white'
document.getElementById("inpNumero15LoteriaQuina").style.backgroundColor = 'white'
}