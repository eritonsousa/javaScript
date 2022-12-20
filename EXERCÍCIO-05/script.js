function tabuada(){
    let n1 = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if(n1.value.length == 0){
        alert('[DIGITE UM NÚMERO]')
    } else {
        let n = Number(n1.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    }
}