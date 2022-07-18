

function modoMegaSena(){
    document.getElementById('secJogos').style.display = 'none'
    document.getElementById('secLoteriaModoMegaSena').style.display = 'block'

    let numeroSorteado = Math.floor(Math.random() * (61-1) + 1)
    sorteio[0] = numeroSorteado
    let i = 1
    
    while (i <= 5){
    let j = 0
    numeroSorteado = Math.floor(Math.random() * (61-1) + 1)
    while (j < i){
        if (numeroSorteado == sorteio[j]){
            numeroSorteado = Math.floor(Math.random() * (61-1) + 1)
            j = 0
        } else { j = j + 1}
    }
    sorteio[i] = numeroSorteado
    i = i + 1
    }
}

function tenteLoteriaMegaSena(){
    document.getElementById("inpNumero1LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero2LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero3LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero4LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero5LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero6LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero7LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero8LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero9LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero10LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero11LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero12LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero13LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero14LoteriaMegaSena").style.backgroundColor = 'red'
    document.getElementById("inpNumero15LoteriaMegaSena").style.backgroundColor = 'red'

    let contador = 1
for (let i = 0; sorteio.length >  i; i++){
    numero1 = document.getElementById("inpNumero1LoteriaMegaSena").value
    numero2 = document.getElementById("inpNumero2LoteriaMegaSena").value
    numero3 = document.getElementById("inpNumero3LoteriaMegaSena").value
    numero4= document.getElementById("inpNumero4LoteriaMegaSena").value
    numero5 = document.getElementById("inpNumero5LoteriaMegaSena").value
    numero6 = document.getElementById("inpNumero6LoteriaMegaSena").value
    numero7 = document.getElementById("inpNumero7LoteriaMegaSena").value
    numero8 = document.getElementById("inpNumero8LoteriaMegaSena").value
    numero9 = document.getElementById("inpNumero9LoteriaMegaSena").value
    numero10 = document.getElementById("inpNumero10LoteriaMegaSena").value
    numero11 = document.getElementById("inpNumero11LoteriaMegaSena").value
    numero12 = document.getElementById("inpNumero12LoteriaMegaSena").value
    numero13 = document.getElementById("inpNumero13LoteriaMegaSena").value
    numero14 = document.getElementById("inpNumero14LoteriaMegaSena").value
    numero15 = document.getElementById("inpNumero15LoteriaMegaSena").value


    if (numero1 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero1LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero2 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero2LoteriaMegaSena").style.backgroundColor = 'green'  
    }
    if (numero3 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero3LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero4 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero4LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero5 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero5LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero6 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero6LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero7 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero7LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero8 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero8LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero9 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero9LoteriaMegaSena").style.backgroundColor = 'green' 
    }
    if (numero10 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero10LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero11 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero11LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero12 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero12LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero13 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero13LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero14 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero14LoteriaMegaSena").style.backgroundColor = 'green'
    }
    if (numero15 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero15LoteriaMegaSena").style.backgroundColor = 'green'
    }
}
    if(acertos < 5){
        document.getElementById('divResultadosMegaSena').innerHTML = 'Resultados: ' + acertos + ' acertos!'
    }
    if (acertos == 5){
        document.getElementById('divResultadosMegaSena').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>'+
        'Ganhou R$50.000,00! Levou o prêmio Quina!'
    }
    if (acertos == 6){
        document.getElementById('divResultadosMegaSena').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>'+
        'Ganhou R$100.000,00! Levou o prêmio Sena!'
    }

    if (contador >= 1){
        document.getElementById("botaoLoteriaMegaSena").disabled = true;
    }


}

function tenteDeNovoLoteriaMegaSena(){
    document.getElementById("botaoLoteriaMegaSena").disabled = false;
    acertos = 0
    contador = 0
    let numeroSorteado = Math.floor(Math.random() * (61-1) + 1)
    sorteio[0] = numeroSorteado
    let i = 1
    
    while (i <= 5){
    let j = 0
    numeroSorteado = Math.floor(Math.random() * (61-1) + 1)
    while (j < i){
        if (numeroSorteado == sorteio[j]){
            numeroSorteado = Math.floor(Math.random() * (61-1) + 1)
            j = 0
        } else { j = j + 1}
    }
    sorteio[i] = numeroSorteado
    i = i + 1
    }

    document.getElementById("inpNumero1LoteriaMegaSena").value = ''
    document.getElementById("inpNumero2LoteriaMegaSena").value = ''
    document.getElementById("inpNumero3LoteriaMegaSena").value = ''
    document.getElementById("inpNumero4LoteriaMegaSena").value = ''
    document.getElementById("inpNumero5LoteriaMegaSena").value = ''
    document.getElementById("inpNumero6LoteriaMegaSena").value = ''
    document.getElementById("inpNumero7LoteriaMegaSena").value = ''
    document.getElementById("inpNumero8LoteriaMegaSena").value = ''
    document.getElementById("inpNumero9LoteriaMegaSena").value = ''
    document.getElementById("inpNumero10LoteriaMegaSena").value = ''
    document.getElementById("inpNumero11LoteriaMegaSena").value = ''
    document.getElementById("inpNumero12LoteriaMegaSena").value = ''
    document.getElementById("inpNumero13LoteriaMegaSena").value = ''
    document.getElementById("inpNumero14LoteriaMegaSena").value = ''
    document.getElementById("inpNumero15LoteriaMegaSena").value = ''
    
    document.getElementById("inpNumero1LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero2LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero3LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero4LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero5LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero6LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero7LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero8LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero9LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero10LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero11LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero12LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero13LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero14LoteriaMegaSena").style.backgroundColor = 'white'
    document.getElementById("inpNumero15LoteriaMegaSena").style.backgroundColor = 'white'



}
