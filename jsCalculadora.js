function calcular(){
    let numero1= Number(document.getElementById("numero1").value)
    let numero2= Number(document.getElementById("numero2").value)
    let total = 0


if(document.getElementById("radio1").checked){
    total= numero1 + numero2
}else if(document.getElementById("radio2").checked){
    total= numero1 - numero2
}else if(document.getElementById("radio3").checked){
    total= numero1 * numero2
}else if(document.getElementById("radio4").checked){
    total= numero1 / numero2
}

document.getElementById("resultado").innerHTML="total = " + total
}



function limpar(){
    document.getElementById("numero1").value=""
    document.getElementById("numero2").value=""
    document.getElementById("resultado").innerHTML=""
    radio1.checked=false
    radio2.checked=false
    radio3.checked=false
    radio4.checked=false
}