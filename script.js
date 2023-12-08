let btn=document.querySelectorAll(".gridBox");
let reset=document.querySelector(".resetBtn");
let winner=document.querySelector(".winner");
let playerX = true;
let winningCombination =[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

btn.forEach((gridBox)=>{
    gridBox.addEventListener("click",()=>{
    console.log("i was clicked");
    gridBox.innerText="X";
    if (playerX){
        gridBox.innerText="X";
        playerX = false;
    }
    else {
        gridBox.innerText="O";
        playerX = true;
    }
    btn.disabled=true;
    checkWinner();
});
});

const checkWinner= () =>{
    for (let pattern of winningCombination){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1val=btn[pattern[0]].innerText;
        // console.log(pos1val);
        let pos2val=btn[pattern[1]].innerText;
        let pos3val=btn[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner ", pos1val);
                let word =(pos1val=="X") ? 'Player 1' : 'Player 2';
                winner.innerText=(word);
            }
        }
    }
}

btn.forEach((gridBox)=>{
    reset.addEventListener("click",()=>{
    console.log("reset was clicked");
    gridBox.innerText="";
    });
});
// reset.addEventListener ("click",()=>{

