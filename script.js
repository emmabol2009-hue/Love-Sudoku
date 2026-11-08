
const sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const oplossing = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const grid = document.getElementById("sudoku-grid");

sudoku.forEach(function(rij, rijIndex) {

    const nieuweRij = document.createElement("tr");

    rij.forEach(function(cijfer, kolomIndex) {

        const nieuwVakje = document.createElement("td");
        const invoer = document.createElement("input");
        invoer.classList.add("sudoku-invoer");

        invoer.type = "text";
        invoer.maxLength = 1;
        invoer.inputMode = "numeric";
        invoer.addEventListener("input", function() {
    this.value = this.value.replace(/[^1-9]/g, "");
});

        if (cijfer !== 0) {
            invoer.value = cijfer;
            invoer.disabled = true;
        }

        nieuwVakje.appendChild(invoer);
        nieuweRij.appendChild(nieuwVakje);

    });

    grid.appendChild(nieuweRij);

});

const controleerKnop = document.getElementById("controleer-knop");
controleerKnop.addEventListener("click", function() {
    const ingevuldeVakjes = document.querySelectorAll(".sudoku-invoer");

   let allesGoed = true;
let allesIngevuld = true;

    ingevuldeVakjes.forEach(function(vakje, index) {
        const rij = Math.floor(index / 9);
        const kolom = index % 9;

        if (vakje.value === "") {
    allesIngevuld = false;
}

if (Number(vakje.value) !== oplossing[rij][kolom]) {
    allesGoed = false;
}
    });

   if (!allesIngevuld) {
    alert("Je hebt nog niet alle vakjes ingevuld!");

} else if (allesGoed) {
    window.location.href = "verrassing.html";

} else {
    alert("Helaas, er staan nog fouten in je sudoku. Probeer het nog eens!");
}
});