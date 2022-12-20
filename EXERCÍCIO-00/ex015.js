var agora = new Date()
var diaSemana = agora.getDay()
    /*
        0 = DOMNGO
        1 = SEGUNDA
        2 = TERÇA
        3 = QUARTA
        4 = QUINTA
        5 = SEXTA
        6 = SABADO
    */
console.log(diaSemana)

    switch(diaSemana){
        case 0:
            console.log('HOJÉ DOMINGO')
            break
        case 1:
            console.log('HOJÉ É SEGUNDA')
            break
        case 2:
            console.log('HOJE É TERÇA')
            break
        case 3:
            console.log('HOJE É QUARTA')
            break
        case 4:
            console.log('HOJE É QUINTA')
            break
        case 5:
            console.log('HOJE É SEXTA')
            break
        case 6:
            console.log('HOJE É SÁBADO')
            break
        default:
            console.log('[ERRO] - DIA INVÁLIDO')
            break
    }