// Functions

function getData():number[]{
    let dataInp_ele = parseInt(
        (<HTMLInputElement>document.getElementById("eleitores")).value);

    let dataInp_bra = parseInt(
        (<HTMLInputElement>document.getElementById("brancos")).value);

    let dataInp_nul = parseInt(
        (<HTMLInputElement>document.getElementById("nulos")).value);

    let dataInp_val = parseInt(
        (<HTMLInputElement>document.getElementById("validos")).value);
    
    return new Array(dataInp_ele,dataInp_bra,dataInp_nul,dataInp_val);
} 

function showArray(data: number[]):void{
    data.forEach(value => {
        console.log(value);
    });
}

// - - - 