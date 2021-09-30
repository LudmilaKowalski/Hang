
const hang = [
    "./Assets/Images/pendu1.png",
    "./Assets/Images/pendu2.png",
    "./Assets/Images/pendu3.png",
    "./Assets/Images/pendu4.png",
    "./Assets/Images/pendu5.png",
    "./Assets/Images/pendu6.png",
    "./Assets/Images/pendu7.png",
    
];

const arr = [
    "Ado", "Cor","Mai", "Bip","Ski","Atre","Rhum","Thym","Lynx", "jazz", "yack","Banjo","Igloo","Moult","Tyran","Acajou","Azimut","Hochet","Cercle","Faucon","Coccyx","Whisky","Bretzel","Panique","Strophe","Vautour","Clavecin","Logiciel","Toujours","Triangle","Utopique","Aseptiser","Ascension","Klaxonner","Mascarade","Printemps","Tambourin","Xylophone"
]

let rand = arr [Math.floor(Math.random() * arr.length)];
let randArr = rand.split("");

console.log(rand)


let word = new Array(randArr.length);
for (let a = 0; a < word.length; a++) {
    word[a] = "";
}


let diagramState = 0;

let gameOver = false;




let diagramSet = () => {
    if (diagramState >= 8) {
        document.getElementById("pendu").setAttribute("src", hang[6]);
    } else {
        document.getElementById("pendu").setAttribute("src", hang[diagramState]);
    }
}

let check = () => {
    if (word.join("") == rand) {
        gameOver = true;
        alert("Win!");
    }
    else if (diagramState >= 6) {
        gameOver = true;
        alert("Loose...");
    }
}

document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();

    if (!gameOver) {
        let tryLetter = document.getElementById("letter").value.toLowerCase();
        let letterIsGood = false;
    
        for (let a = 0; a < randArr.length; a++) {
            if (randArr [a] == tryLetter) {
                letterIsGood = true;
                word[a] = tryLetter;
            }
            else if (randArr [a] == " ") {
                word[a] = " ";
            }
        }
        
        let wordToShow = "";

        for (let letter of word) {
            if (letter == "") {
                wordToShow += "*";
            }
            else if (letter == " ") {
                wordToShow += "!";
            }
            else {
                wordToShow += letter;
            }
        }
    
        if (!letterIsGood) {
            diagramState += 1;
            diagramSet();
        }

        let wordFind = document.getElementById("word");

        wordToShow = wordToShow.split("");
        wordToShow = wordToShow.join(" ");
        wordToShow = wordToShow.replace("!", "&nbsp");

        wordFind.innerHTML = wordToShow;
        check();
    }
});


diagramSet();