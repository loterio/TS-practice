 function rBol():void{
    let num = parseInt(
        (<HTMLInputElement>document.getElementById("n")).value);
    
    let st = num > 0 ? true : false;
    alert(st);
 }