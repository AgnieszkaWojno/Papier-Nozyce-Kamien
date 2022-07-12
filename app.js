const wybrano = document.getElementById("twojWybor")
let userChoice
let computerChoice
let compChoiceDisplay = document.getElementById("kompWybor")

function compChoicing(){
    const los = Math.floor(Math.random()*3 + 1)
    console.log(los)
    return los
}
const wybory = ["papier", "nożyce", "kamień"]
// computerChoice = wybory[compChoicing()-1]
// console.log(computerChoice)

// document.getElementById("kompWybor").innerHTML = computerChoice

possibleChoices = document.querySelectorAll("button")
console.log(possibleChoices)
// possibleChoices.forEach(wybor => wybor.addEventListener('click',userChoice = wybor.target.id)
//     {
    
// });

possibleChoices.forEach(wybor => {
    wybor.addEventListener('click', (e) =>{
    userChoice = e.target.id
    wybrano.innerHTML = wybory[userChoice-1]
    computerChoice = wybory[compChoicing()-1]
    compChoiceDisplay.innerHTML = computerChoice
    })
});