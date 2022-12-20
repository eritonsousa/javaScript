let num = [9, 2, 1, 7]
num.sort()
/*for(var pos=0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem um valor ${num[pos]}`)
}
*/
let pos = 0
for(pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}