function verificarAprovacao() {
    var nota = document.getElementById("nota").value;
    var resultado = document.getElementById("resultado");

    if (nota >= 7) {
        resultado.textContent = "Aprovado";
    } else {
        resultado.textContent = "Reprovado";
    }
}
