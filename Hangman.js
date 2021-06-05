
 //Model
let answer = "VEKST"
let guess = [];


function key(bokstav) {
    if (bokstav === 'V' || bokstav === 'E' || bokstav === 'K' || bokstav === 'S' || bokstav === 'T') {
        bokstav.disabled = true;
        guess.push(bokstav)



        updateView();
        checkWin();
        return `rikitg`;
    } else return `feil`;

}
function checkWin() {


    if (guess[0] == 'V' && guess[1] == 'E' && guess[2] == 'K' && guess[3] == 'S' && guess[4] == 'T') {
        alert('Gratulerer!')
        return `hallo`;
    } else return `stå på`;
}

function hei() {
    return `hei`;
}
    


