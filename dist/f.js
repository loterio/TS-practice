function compareAge(st, nd) {
    var m;
    if (st > nd) {
        m = "first(" + st + "y) is older than second(" + nd + "y)";
    }
    else if (st == nd) {
        m = "first(" + st + "y) is equal to second(" + nd + "y)";
    }
    else {
        m = "second(" + nd + "y) is older than first(" + st + "y)";
    }
    return m;
}
function fnsh() {
    var one = parseInt(document.getElementById("p1").value);
    var two = parseInt(document.getElementById("p2").value);
    var msg = compareAge(one, two);
    alert(msg);
}
