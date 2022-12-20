let num = [9, 2, 1, 7]


let pos = num.indexOf(9)
console.log(num)
if(pos == -1){
    console.log(`Essa posição é ${pos} [NÃO EXISTE!!!]`)
} else{ 
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log(num.sort())

