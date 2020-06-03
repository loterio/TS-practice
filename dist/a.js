// Functions
function getData() {
    var dataInp_ele = parseInt(document.getElementById("eleitores").value);
    var dataInp_bra = parseInt(document.getElementById("brancos").value);
    var dataInp_nul = parseInt(document.getElementById("nulos").value);
    var dataInp_val = parseInt(document.getElementById("validos").value);
    return new Array(dataInp_ele, dataInp_bra, dataInp_nul, dataInp_val);
}
function showArray(data) {
    data.forEach(function (value) {
        console.log(value);
    });
}
// - - - 
