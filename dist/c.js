function getNotes() {
    var w2 = parseInt(document.getElementById("n1").value);
    var w3 = parseInt(document.getElementById("n2").value);
    var w5 = parseInt(document.getElementById("n3").value);
    var grades = [w2, w3, w5];
    return grades;
}
function gradesAVG() {
    var m;
    var g = getNotes();
    m = (g[0] * 2 + g[1] * 3 + g[2] * 5) / 10;
    alert("n1: " + g[0] + " n2: " + g[1] + " n3: " + g[2] + "\n            \naverage: " + m);
}
