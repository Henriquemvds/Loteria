function apostar(){
    cliques++
    
    if (cliques == 1){
        document.getElementById('divApostasQuina').innerHTML = 'Aposta Atual: R$12,00'
        document.getElementById('divApostasMegaSena').innerHTML = 'Aposta Atual: R$24,50'
        document.getElementById('divApostasLotoFacil').innerHTML = 'Aposta Atual: R$40,00'
        document.getElementById('inpNumero16LoteriaLotoFacil').style.display = 'inline'
        document.getElementById('inpNumero6LoteriaQuina').style.display = 'inline'
        document.getElementById('inpNumero7LoteriaMegaSena').style.display = 'inline'
    }
    if (cliques == 2){
        document.getElementById('divApostasMegaSena').innerHTML = 'Aposta Atual: R$98,00'
        document.getElementById('divApostasQuina').innerHTML = 'Aposta Atual: R$42,00'
        document.getElementById('divApostasLotoFacil').innerHTML = 'Aposta Atual: R$340,00'
        document.getElementById('inpNumero17LoteriaLotoFacil').style.display = 'inline'
        document.getElementById('inpNumero7LoteriaQuina').style.display = 'inline'
        document.getElementById('inpNumero8LoteriaMegaSena').style.display = 'inline'
    }
    if (cliques == 3){
        document.getElementById('divApostasMegaSena').innerHTML = 'Aposta Atual: R$294,00'
        document.getElementById('divApostasQuina').innerHTML = 'Aposta Atual: R$112,00'
        document.getElementById('divApostasLotoFacil').innerHTML = 'Aposta Atual: R$2.040,00'
        document.getElementById('inpNumero18LoteriaLotoFacil').style.display = 'inline'
        document.getElementById('inpNumero8LoteriaQuina').style.display = 'inline'
        document.getElementById('inpNumero9LoteriaMegaSena').style.display = 'inline'
    }
    if (cliques == 4){
        document.getElementById('divApostasMegaSena').innerHTML = 'Aposta Atual: R$735,00'
        document.getElementById('divApostasQuina').innerHTML = 'Aposta Atual: R$252,00'
        document.getElementById('divApostasLotoFacil').innerHTML = 'Aposta Atual: R$9.690'
        document.getElementById('inpNumero19LoteriaLotoFacil').style.display = 'inline'
        document.getElementById('inpNumero9LoteriaQuina').style.display = 'inline'
        document.getElementById('inpNumero10LoteriaMegaSena').style.display = 'inline'
    }
    if (cliques == 5){
        document.getElementById('divApostasMegaSena').innerHTML = 'Aposta Atual: R$1.617,00'
        document.getElementById('divApostasQuina').innerHTML = 'Aposta Atual: R$504,00'
        document.getElementById('divApostasLotoFacil').innerHTML = 'Aposta Atual: R$38.760,00'
        document.getElementById('inpNumero20LoteriaLotoFacil').style.display = 'inline'
        document.getElementById('inpNumero10LoteriaQuina').style.display = 'inline'
        document.getElementById('inpNumero11LoteriaMegaSena').style.display = 'inline'
    }
    if(cliques == 6){
        document.getElementById('divApostasMegaSena').innerHTML = 'Aposta Atual: R$3.234,00'
        document.getElementById('divApostasQuina').innerHTML = 'Aposta Atual: R$924,00'
        document.getElementById('inpNumero11LoteriaQuina').style.display = 'inline'
        document.getElementById('inpNumero12LoteriaMegaSena').style.display = 'inline'
    }
    if(cliques == 7){
        document.getElementById('divApostasMegaSena').innerHTML = 'Aposta Atual: R$6.006,00'
        document.getElementById('divApostasQuina').innerHTML = 'Aposta Atual: R$1.584,00'
        document.getElementById('inpNumero12LoteriaQuina').style.display = 'inline'
        document.getElementById('inpNumero13LoteriaMegaSena').style.display = 'inline'
    }
    if(cliques == 8){
        document.getElementById('divApostasMegaSena').innerHTML = 'Aposta Atual: R$10.510,00'
        document.getElementById('divApostasQuina').innerHTML = 'Aposta Atual: R$2.574,00'
        document.getElementById('inpNumero13LoteriaQuina').style.display = 'inline'
        document.getElementById('inpNumero14LoteriaMegaSena').style.display = 'inline'
    }
    if(cliques == 9){
        document.getElementById('divApostasMegaSena').innerHTML = 'Aposta Atual: R$17.517,50'
        document.getElementById('divApostasQuina').innerHTML = 'Aposta Atual: R$4.004,00'
        document.getElementById('inpNumero14LoteriaQuina').style.display = 'inline'
        document.getElementById('inpNumero15LoteriaMegaSena').style.display = 'inline'
    }
    if(cliques == 10){
        document.getElementById('divApostasQuina').innerHTML = 'Aposta Atual: R$6.006,00'
        document.getElementById('inpNumero15LoteriaQuina').style.display = 'inline'
    }
    
    
    }