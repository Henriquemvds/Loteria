
let contador = 0
let sorteio = []
let acertos = 0
let cliques = 0
function modoLotoFacil(){
    document.getElementById('secJogos').style.display = 'none'
    document.getElementById('secLoteriaModoLotoFacil').style.display = 'block'
    
    let numeroSorteado = Math.floor(Math.random() * (26-1) + 1)
    sorteio[0] = numeroSorteado
    let i = 1

    while (i <= 14){
let j = 0
numeroSorteado = Math.floor(Math.random() * (26-1) + 1)
while (j < i){
    if (numeroSorteado == sorteio[j]){
        numeroSorteado = Math.floor(Math.random() * (26-1) + 1)
        j = 0
    } else { j = j + 1}
}
sorteio[i] = numeroSorteado
i = i + 1
} 
}

function tenteLoteriaLotoFacil(){
    document.getElementById("inpNumero1LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero2LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero3LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero4LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero5LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero6LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero7LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero8LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero9LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero10LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero11LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero12LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero13LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero14LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero15LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero16LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero17LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero18LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero19LoteriaLotoFacil").style.backgroundColor = 'red'
    document.getElementById("inpNumero20LoteriaLotoFacil").style.backgroundColor = 'red'
    let contador = 1
for (let i = 0; sorteio.length >  i; i++){
    numero1 = document.getElementById("inpNumero1LoteriaLotoFacil").value
    numero2 = document.getElementById("inpNumero2LoteriaLotoFacil").value
    numero3 = document.getElementById("inpNumero3LoteriaLotoFacil").value
    numero4= document.getElementById("inpNumero4LoteriaLotoFacil").value
    numero5 = document.getElementById("inpNumero5LoteriaLotoFacil").value
    numero6 = document.getElementById("inpNumero6LoteriaLotoFacil").value
    numero7 = document.getElementById("inpNumero7LoteriaLotoFacil").value
    numero8 = document.getElementById("inpNumero8LoteriaLotoFacil").value
    numero9 = document.getElementById("inpNumero9LoteriaLotoFacil").value
    numero10 = document.getElementById("inpNumero10LoteriaLotoFacil").value
    numero11 = document.getElementById("inpNumero11LoteriaLotoFacil").value
    numero12 = document.getElementById("inpNumero12LoteriaLotoFacil").value
    numero13 = document.getElementById("inpNumero13LoteriaLotoFacil").value
    numero14 = document.getElementById("inpNumero14LoteriaLotoFacil").value
    numero15 = document.getElementById("inpNumero15LoteriaLotoFacil").value
    numero16 = document.getElementById("inpNumero16LoteriaLotoFacil").value
    numero17 = document.getElementById("inpNumero17LoteriaLotoFacil").value
    numero18 = document.getElementById("inpNumero18LoteriaLotoFacil").value
    numero18 = document.getElementById("inpNumero19LoteriaLotoFacil").value
    numero18 = document.getElementById("inpNumero20LoteriaLotoFacil").value

    if (numero1 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero1LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero2 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero2LoteriaLotoFacil").style.backgroundColor = 'green'  
    }
    if (numero3 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero3LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero4 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero4LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero5 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero5LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero6 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero6LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero7 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero7LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero8 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero8LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero9 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero9LoteriaLotoFacil").style.backgroundColor = 'green' 
    }
    if (numero10 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero10LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero11 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero11LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero12 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero12LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero13 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero13LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero14 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero14LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero15 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero15LoteriaLotoFacil").style.backgroundColor = 'green'
    }
 
    if (numero16 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero16LoteriaLotoFacil").style.backgroundColor = 'green'
    }
 
    if (numero17 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero17LoteriaLotoFacil").style.backgroundColor = 'green'
    }
 
    if (numero18 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero18LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero19 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero19LoteriaLotoFacil").style.backgroundColor = 'green'
    }
    if (numero20 == sorteio[i]){
        acertos++
        document.getElementById("inpNumero20LoteriaLotoFacil").style.backgroundColor = 'green'
    }
 
    
    if (contador >= 1){
        document.getElementById("botaoLoteriaLotoFacil").disabled = true;
    }
}
if (acertos < 11 ){
    document.getElementById('divResultadosLotoFacil').innerHTML = 'Resultados: ' + acertos + ' acertos!'
}

if (acertos == 11){
    document.getElementById('divResultadosLotoFacil').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>' +
    'Ganhou R$5,00!!!'
}

if (acertos == 12){
    document.getElementById('divResultadosLotoFacil').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>' +
    'Ganhou R$10,00!!!'
}
if (acertos == 13){
    document.getElementById('divResultadosLotoFacil').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>' +
    'Ganhou R$25,00!!!'
}
if (acertos == 14){
    document.getElementById('divResultadosLotoFacil').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>' +
    'Ganhou R$500.000,00!!!'
}
if (acertos == 15){
    document.getElementById('divResultadosLotoFacil').innerHTML = 'Resultados: ' + acertos + ' acertos!' + '<br>' +
    'Ganhou R$1.000.000,00, com esse talento, já deveria estar jogando o real!'
}

}


function tenteDeNovoLoteriaLotoFacil(){
    document.getElementById("botaoLoteriaLotoFacil").disabled = false;
    contador = 0
    acertos = 0
    let numeroSorteado = Math.floor(Math.random() * (26-1) + 1)
    sorteio[0] = numeroSorteado
    let i = 1
    
    while (i <= 14){
    let j = 0
    numeroSorteado = Math.floor(Math.random() * (26-1) + 1)
    while (j < i){
        if (numeroSorteado == sorteio[j]){
            numeroSorteado = Math.floor(Math.random() * (26-1) + 1)
            j = 0
        } else { j = j + 1}
    }
    sorteio[i] = numeroSorteado
    i = i + 1
    }

document.getElementById("inpNumero1LoteriaLotoFacil").value = ''
document.getElementById("inpNumero2LoteriaLotoFacil").value = ''
document.getElementById("inpNumero3LoteriaLotoFacil").value = ''
document.getElementById("inpNumero4LoteriaLotoFacil").value = ''
document.getElementById("inpNumero5LoteriaLotoFacil").value = ''
document.getElementById("inpNumero6LoteriaLotoFacil").value = ''
document.getElementById("inpNumero7LoteriaLotoFacil").value = ''
document.getElementById("inpNumero8LoteriaLotoFacil").value = ''
document.getElementById("inpNumero9LoteriaLotoFacil").value = ''
document.getElementById("inpNumero10LoteriaLotoFacil").value = ''
document.getElementById("inpNumero11LoteriaLotoFacil").value = ''
document.getElementById("inpNumero12LoteriaLotoFacil").value = ''
document.getElementById("inpNumero13LoteriaLotoFacil").value = ''
document.getElementById("inpNumero14LoteriaLotoFacil").value = ''
document.getElementById("inpNumero15LoteriaLotoFacil").value = ''
document.getElementById("inpNumero16LoteriaLotoFacil").value = ''
document.getElementById("inpNumero17LoteriaLotoFacil").value = ''
document.getElementById("inpNumero18LoteriaLotoFacil").value = ''
document.getElementById("inpNumero19LoteriaLotoFacil").value = ''
document.getElementById("inpNumero20LoteriaLotoFacil").value = ''

document.getElementById("inpNumero1LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero2LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero3LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero4LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero5LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero6LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero7LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero8LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero9LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero10LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero11LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero12LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero13LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero14LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero15LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero16LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero17LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero18LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero19LoteriaLotoFacil").style.backgroundColor = 'white'
document.getElementById("inpNumero20LoteriaLotoFacil").style.backgroundColor = 'white'
}



function Volte(){
location.reload()
}