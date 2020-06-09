function rrange(r) {
    var v;
    v = (4 * Math.PI * r ^ 3) / 3;
    return v;
}
function prg() {
    var r = parseInt(document.getElementById("raio").value);
    var result = rrange(r);
    alert("volume da circunferência: " + result);
}
