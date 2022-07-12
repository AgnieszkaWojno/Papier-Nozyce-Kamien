const wybrano = document.getElementById("twojWybor")
var userChoice
var computerChoice
let compChoiceDisplay = document.getElementById("kompWybor")
let wynik = document.querySelector("#wynik")

function compChoicing(){
    const los = Math.floor(Math.random()*3 + 1)
    console.log(los)
    return los
}
const wybory = ["papier", "kamień", "nożyce"]


possibleChoices = document.querySelectorAll("button")
console.log(possibleChoices)


possibleChoices.forEach(wybor => {
    wybor.addEventListener('click', (e) =>{
    userChoice = e.target.id
    wybrano.innerHTML = wybory[userChoice-1]
    computerChoice = compChoicing()
    compChoiceDisplay.innerHTML = wybory[computerChoice-1]
    getResult()
    })
});

function getResult(){
    console.log("user="+userChoice)
    console.log("comp="+computerChoice)
    if(computerChoice == userChoice)
        wynik.innerHTML = "Remis!"
    if(wybory[userChoice-1] == "papier" && wybory[computerChoice-1] == "nożyce")
        wynik.innerHTML = "Niestety przegrałeś!"
    if(wybory[userChoice-1] == "papier" && wybory[computerChoice-1] == "kamień")
        wynik.innerHTML = "Brawo! Wygrałeś!"
    if(wybory[userChoice-1] == "kamień" && wybory[computerChoice-1] == "papier")
        wynik.innerHTML = "Niestety przegrałeś!"
    if(wybory[userChoice-1] == "kamień" && wybory[computerChoice-1] == "nożyce")
        wynik.innerHTML = "Brawo! Wygrałeś!"
    if(wybory[userChoice-1] == "nożyce" && wybory[computerChoice-1] == "kamień")
        wynik.innerHTML = "Niestety przegrałeś!"
    if(wybory[userChoice-1] == "nożyce" && wybory[computerChoice-1] == "papier")
        wynik.innerHTML = "Brawo! Wygrałeś!"
}
