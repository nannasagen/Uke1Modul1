
 //Model
 let guess = [];
 let answer = "VEKST";
 let html = "";
 
 function key(bokstav) {
     if (bokstav === 'V' || bokstav === 'E' || bokstav === 'K' || bokstav === 'S' || bokstav === 'T') {
         bokstav.disabled = true;
         guess.push(bokstav)
         updateView();
         checkWin();
         return `riktig`;
     } else return `feil`;
 }
 function checkWin() {
     if (!(guess[0] == 'V' && guess[1] == 'E' && guess[2] == 'K' && guess[3] == 'S' && guess[4] == 'T')) {
         return `stå på`;
     } else {
         alert("Du vant");
         return "Du vant";
     };
 }
    


