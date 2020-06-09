 
    function rrange(r:number):number { // v = (4 * pi * R^3) / 3

        let v:number;
        v = (4 * Math.PI * r^3)/3;

        return v;
    }

    function prg():void{

        let r:number = parseInt(
            (<HTMLInputElement>document.getElementById("raio")).value);
            
        let result = rrange(r);

        alert("volume da circunferência: "+result);
    }
