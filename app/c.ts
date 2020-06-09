
    function getNotes():number[]{

        let w2:number = parseInt(
            (<HTMLInputElement>document.getElementById("n1")).value);

        let w3:number = parseInt(
            (<HTMLInputElement>document.getElementById("n2")).value);

        let w5:number = parseInt(
            (<HTMLInputElement>document.getElementById("n3")).value);

        let grades:number[] = [w2,w3,w5]; 
        return grades;
    }

    function gradesAVG():void{  // mf = n1*2 + n2*3 + n3*5 / 10

        let m:number;
        let g = getNotes();
    
        m = (g[0]*2 + g[1]*3 + g[2]*5)/10;
        
        alert(`n1: ${g[0]} n2: ${g[1]} n3: ${g[2]}
            \naverage: ${m}`);
    }