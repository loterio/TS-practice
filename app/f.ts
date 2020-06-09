function compareAge(st:number, nd:number):string {

    let m:string;

    if(st > nd){
        m = `first(${st}y) is older than second(${nd}y)`;
    }else if(st == nd){
        m = `first(${st}y) is equal to second(${nd}y)`;
    }else{
        m = `second(${nd}y) is older than first(${st}y)`;
    }

    return m;
}

function fnsh():void {
    let one:number = parseInt( 
        (<HTMLInputElement>document.getElementById("p1")).value);

    let two:number = parseInt( 
        (<HTMLInputElement>document.getElementById("p2")).value);

    let msg = compareAge(one, two);
    alert(msg);
}