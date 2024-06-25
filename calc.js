function calcular(){
    let n1 = Number(document.getElementById("txtValor1").value);
    let n2 = Number(document.getElementById("txtValor2").value);

    let caixaResultado = document.getElementById("cbxResultado");

    let op = document.getElementById("cbxOperacao").value;

    let resultado;

    if (op === "+"){
        resultado = n1 + n2;
    } else if (op === "-"){
        resultado = n1 - n2;
    } else if (op === "/"){
        resultado = n1 / n2;
    } else {
        resultado = n1 * n2;
    }

    caixaResultado.textContent = resultado;

}