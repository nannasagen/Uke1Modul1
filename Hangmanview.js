  
// Model


let appen = document.getElementById("app");
//View

updateView();
function updateView() {
    html =
        `
    <button class="buttons" id="A" onclick="key(this)" >A</button><button class="buttons" onclick="key('B')">B</button> 
    <button class="buttons" onclick="key('C')">C</button><button class="buttons" onclick="key('D')">D</button>
    <button class="buttons" onclick="key('E')">E</button><button class="buttons" onclick="key('F')">F</button>
    <button class="buttons" onclick="key('G')">G</button><button class="buttons" onclick="key('H')">H</button>
    <button class="buttons" onclick="key('I')">I</button><button class="buttons" onclick="key('J')">J</button>
    <button class="buttons" onclick="key('K')">K</button><button class="buttons" onclick="key('L')">L</button>
    <button class="buttons" onclick="key('M')">M</button><button class="buttons" onclick="key('N')">N</button>
    <button class="buttons" onclick="key('O')">O</button><button class="buttons" onclick="key('P')">P</button>
    <button class="buttons" onclick="key('Q')">Q</button><button class="buttons" onclick="key('R')">R</button>
    <button class="buttons" onclick="key('S')">S</button><button class="buttons" onclick="key('T')">T</button>
    <button class="buttons" onclick="key('U')">U</button><button class="buttons" onclick="key('V')">V</button>
    <button class="buttons" onclick="key('W')">W</button><button class="buttons" onclick="key('X')">X</button>
    <button class="buttons" onclick="key('Y')">Y</button><button class="buttons" onclick="key('Z')">Z</button>
    <button class="buttons" onclick="key('Æ')">Æ</button><button class="buttons" onclick="key('Ø')">Ø</button>
    <button class="buttons" onclick="key('Å')">Å</button>
    <div id="box1" class="box">${guess[0] || ''}</div> <div id="box2" class="box">${guess[1] || ''}</div> <div id="box3" class="box">${guess[2] || ''}</div>
     <div id="box4" class="box">${guess[3] || ''}</div> <div id="box5" class="box">${guess[4] || ''}</div>
     `;
    appen.innerHTML = html;
}
