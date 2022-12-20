function contar(){
    var inicio = document.getElementById('numi')
    var fim = document.getElementById('numf')
    var passo = document.getElementById('qp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Confira os DADOS INFORMADOS')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            alert('Passo [INVÁLIDO]. Considerando Passo = 1')
            p = 1
        }
        
        if (i < f){
            for(var c = i; c <= f; c += p){
           res.innerHTML += `${c}\u{1F449} `
        } 
        } else {
            for(var c = i; c >= f; c-= p){
              res.innerHTML += `${c}\u{1F449}`  
            } 
        }
           res.innerHTML += `\u{1F3C1}`
        }
    }
