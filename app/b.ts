
    function newSal():void{
        let salary = parseFloat(
            (<HTMLInputElement>document.getElementById("salario")).value);

        let percentage = parseFloat(
            (<HTMLInputElement>document.getElementById("reajuste")).value);

        let ns:number = ((salary / 100) * percentage)+salary; 

        alert("salário mensal: "+salary+"$"
            +"\nreajuste de "+percentage+"%"
            +"\nnovo salário: "+ns+"$");
    }
