let usersScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");                   //access all the html data on js
const user = document.querySelector("#user_score");
const computer = document.querySelector("#computer_score");

const genCompChoice = () => {
    // option for comp
    const options = ["rock","paper","scissor"];

    const randidx = Math.floor(Math.random() * 3);             //floor use for round of the biggest number
    return options[randidx];

}
const drawgame =()=>{
    msg.innerText = "Game was draw,play again";
    msg.style.backgroundColor = "white";
    msg.style.color = "black";
}
const showwin = (userwin,userChoice,compchoice) =>{
    if(userwin){
        usersScore ++;
        user.innerText = usersScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }
    else{
        compScore ++;
        computer.innerText = compScore;
        msg.innerText = `You lose.${compchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}
const plaGame = (userChoice) => {
          console.log("user choice =",userChoice)
          //generate comp choice
          const compchoice = genCompChoice();
          console.log("computer choice =",compchoice);
          if(userChoice === compchoice){
            //draw game
             drawgame()
          }
          else{
            let userwin = true;
                if(userChoice === "rock"){
                    //scissor ,paper
                    userwin=compchoice === "paper" ? false : true
                }
                else if(userChoice === "paper"){
                    //rock,scissor
                    userwin=compchoice === "scissor"? false : true
                }else{
                    //rock,paper
                    userwin=compchoice === "rock" ? false :true
                }
             showwin(userwin,userChoice,compchoice)    //for show winner
          }

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{                  //for make the clickeble choice
        const userChoice = choice.getAttribute("id")
             plaGame(userChoice)
    });
});
