let n = ['Arroz', ' Feijão', ' Carne', 'Tomate']


/*for (let pos = 0; pos < n.length; pos++){
    console.log(`A posicção ${pos} tem o valor ${n[pos]}`)
}
*/
for (let pos in n){
    console.log(`A posicção ${pos} tem o valor ${n[pos]}`)
}