function vAge():void {
    let age = parseInt(
        (<HTMLInputElement>document.getElementById("idade")).value);

    let m = age >= 18 ? "maior de idade." : "menor de idade";
    alert(m);
}