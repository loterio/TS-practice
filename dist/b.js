function newSal() {
    var salary = parseFloat(document.getElementById("salario").value);
    var percentage = parseFloat(document.getElementById("reajuste").value);
    var ns = ((salary / 100) * percentage) + salary;
    alert("salário mensal: " + salary + "$"
        + "\nreajuste de " + percentage + "%"
        + "\nnovo salário: " + ns + "$");
}
