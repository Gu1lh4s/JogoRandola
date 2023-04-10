var tentativas = 10

function verificaSeOChutePossuiUmValorValido(chute){
    const numero =  + chute



    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Invalido</div>'
        if (chuteForInvalido(numero)) {
            if (chute === "Game over" ) {
    
                document.body.innerHTML =
                    `
                    <h2 class=gameovert>Game Over!!!</h2>
                    <h3 class= gameoverb>Pressione o botão para jogar novamente</h3>
                    <button id="jogar-novamente" class="botaog" >Jogar novamente</button>
                    `
                    document.body.style.backgroundColor = "black";
            }
        }
    
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
       elementoChute.innerHTML += `<div>Fale um numero entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroRandola){
        document.body.innerHTML = `<h2 class=titu>Você acertou!!</h2><h3 class=titu2>O numero randola era ${numeroRandola}</h3> <button id="jogar-novamente" class=botao>Jogar novamente</button>`
        

    }   else if(numero > numeroRandola){ tentativas--         
        console.log(`Tentativas restantes: ${tentativas}`); const tentativass = document.getElementById('tentativas')
        tentativass.innerHTML = tentativas
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-1-9"></i></div>`
    }   else { tentativas--
        console.log(`Tentativas restantes: ${tentativas}`); const tentativass = document.getElementById('tentativas')
        tentativass.innerHTML = tentativas
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-1-9"></i></div>`

        


        if(tentativas <= 0) {
            document.body.innerHTML =
            `
            <h2 class=gameovert>Game Over!!!</h2>
            <h3 class= gameoverb>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="botaog" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";
    } else {

        elementoChute.innerHTML += '<div></div>';
    }
}
        }




function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor 
}  

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})