// Functions
function getData() {
    var dataInp_ele = parseInt(document.getElementById("eleitores").value);
    var dataInp_bra = parseInt(document.getElementById("brancos").value);
    var dataInp_nul = parseInt(document.getElementById("nulos").value);
    var dataInp_val = parseInt(document.getElementById("validos").value);
    var data = [dataInp_ele, dataInp_bra, dataInp_nul, dataInp_val];
    // document.getElementById('results').innerHTML = "Votantes:",String(dataInp_ele);
    return data;
}
function showResults() {
    var data = getData();
    var perc_br = (data[1] * 100) / data[0];
    var perc_nl = (data[2] * 100) / data[0];
    var perc_vl = (data[3] * 100) / data[0];
    alert("total: " + data[0] + " \n \n        brancos: " + data[1] + " (" + perc_br + "%) \n \n        nulos: " + data[2] + " (" + perc_nl + "%) \n \n        v\u00E1lidos: " + data[3] + " (" + perc_vl + "%) \n");
}
// - - - 
