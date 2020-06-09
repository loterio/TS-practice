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
    
    let data:number[] = [dataInp_ele,dataInp_bra,dataInp_nul,dataInp_val];

    // document.getElementById('results').innerHTML = "Votantes:",String(dataInp_ele);
    return data;
} 

function showResults():void{
    let data:number[] = getData();
        let perc_br: number = (data[1]*100)/data[0]; 
        let perc_nl: number = (data[2]*100)/data[0];
        let perc_vl: number = (data[3]*100)/data[0];
         
    alert(`total: ${data[0]} \n 
        brancos: ${data[1]} (${perc_br}%) \n 
        nulos: ${data[2]} (${perc_nl}%) \n 
        válidos: ${data[3]} (${perc_vl}%) \n`);
}

// - - - 