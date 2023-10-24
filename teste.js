function insert(num){
    var numero = document.querySelector(".display").innerHTML
    document.getElementById('display').innerHTML = numero + num
}

function calcular(){
    var resultado = document.querySelector(".display").innerHTML

    if(resultado){
        document.querySelector(".display").innerHTML = eval(resultado)
    }

}


function clean(){
    document.querySelector(".display").innerHTML = ""
}

