function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anonasc = window.document.getElementById('anonasc')
    var res = window.document.getElementById('res')
    if (anonasc.value == 0 || Number(anonasc.value) > anoAtual){
        window.alert('[INVÁLIDO] Corrija as informações e tente novamente.')
    }  
        else {
            var fsex = window.document.getElementsByName('tsex')
            var idade = anoAtual - Number(anonasc.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'

            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'

            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}