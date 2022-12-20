var idade = 22
console.log(`SUA IDADE É ${idade} anos`)
if (idade < 16){
    console.log('NÃO VOTA')
} else if(idade < 18 || idade > 65){
    console.log('VOTO OPCIONAL')
} else{
    console.log('VOTO OBRIGATÓRIO')
}