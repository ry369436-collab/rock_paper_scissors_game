let yourCurrScore = 0;
let compCurrScore = 0;
let yourScore = document.querySelector("#yourScore");
let compScore = document.querySelector("#compScore");
let outMsg = document.querySelector("#outputMsg");
let compInput = () => {
    choices = ["rock", "paper", "scissors"];
    let randomValue = Math.random()
    idx = Math.floor(randomValue*3);
    return choices[idx];
}
let icons = document.querySelectorAll(".icons");
icons.forEach((value) =>{
    value.addEventListener("click", (event) => {
    console.log(`Icon ${userChoice} is clicked` );
    console.log(event);
    console.log(event.type);
    });
    let iconName = () => {
    return (value.getAttribute("id"));
    };
    let userChoice = iconName();

    value.addEventListener("click", ()=>{
        let compChoice = compInput();
        if(userChoice === compChoice){
            console.log(`Draw ${userChoice} is drawn by ${compChoice}`);
            outMsg.innerHTML = `Draw!! Play again 👌You both have ${userChoice}`;
            outMsg.style.backgroundColor = "rgba(12, 230, 12, 0.668)";
            yourCurrScore += 0;
            compCurrScore += 0;
            yourScore.innerHTML = yourCurrScore;
            compScore.innerHTML = compCurrScore;
        } else if(userChoice === "rock" && compChoice === "scissors"){
            console.log("user won", userChoice, "beats", compChoice );
            outMsg.innerHTML = `You won!!, ${userChoice} beats ${compChoice}`;
            outMsg.style.backgroundColor = "green";
            yourCurrScore += 1;
            compCurrScore += 0;
            yourScore.innerHTML = yourCurrScore;
            compScore.innerHTML = compCurrScore;
        } else if(userChoice === "rock" && compChoice === "paper"){
            console.log("user lost", compChoice, "beats", userChoice);
            outMsg.innerHTML = `You lost 😔 ${compChoice} beats ${userChoice}`;
            outMsg.style.backgroundColor = "red";
            yourCurrScore += 0;
            compCurrScore += 1;
            yourScore.innerHTML = yourCurrScore;
            compScore.innerHTML = compCurrScore;
        } else if(userChoice ==="paper" && compChoice === "rock"){
            console.log("user won", userChoice, "beats", compChoice);
            outMsg.innerHTML = `You won!!, ${userChoice} beats ${compChoice}`;
            outMsg.style.backgroundColor = "green";
            yourCurrScore += 1;
            compCurrScore += 0;
            yourScore.innerHTML = yourCurrScore;
            compScore.innerHTML = compCurrScore;
        } else if(userChoice ==="paper" && compChoice === "scissors"){
            console.log("user lost", compChoice, "beats", userChoice);
            outMsg.innerHTML = `You lost 😔 ${compChoice} beats ${userChoice}`;
            outMsg.style.backgroundColor = "red";
            yourCurrScore += 0;
            compCurrScore += 1;
            yourScore.innerHTML = yourCurrScore;
            compScore.innerHTML = compCurrScore;
        } else if(userChoice === "scissors" && compChoice === "rock"){
            console.log("user lost", compChoice, "beats", userChoice);
            outMsg.innerHTML = `You lost 😔 ${compChoice} beats ${userChoice}`;
            outMsg.style.backgroundColor = "red";
            yourCurrScore += 0;
            compCurrScore += 1;
            yourScore.innerHTML = yourCurrScore;
            compScore.innerHTML = compCurrScore;
        } else {
            console.log("user won", userChoice, "beats", compChoice);
            outMsg.innerHTML = `You won!!, ${userChoice} beats ${compChoice}`;
            outMsg.style.backgroundColor = "green";
            yourCurrScore += 1;
            compCurrScore += 0;
            yourScore.innerHTML = yourCurrScore;
            compScore.innerHTML = compCurrScore;
        }
        
    });
    // console.log(value);
    // console.log(idx);
});