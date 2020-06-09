function vAge() {
    var age = parseInt(document.getElementById("idade").value);
    var m = age >= 18 ? "maior de idade." : "menor de idade";
    alert(m);
}
