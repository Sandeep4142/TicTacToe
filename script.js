console.log("Welcome to TicTacToe Game");
let isgameover=false;
let turn="X";

//function to change turn
const changeTurn = () =>{
    return turn ==="X"?"O":"X";
}

//function to check for win 
const checkWin = ()=>{
 let boxtext=document.getElementsByClassName("boxtext");
 let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ]
 wins.forEach(e =>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
        document.querySelector(".info").innerHTML=boxtext[e[0]].innerHTML+" WON";
        isgameover=true;
        console.log(isgameover)
    }
 })
}

//game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    
    element.addEventListener('click',()=>{
        if(!isgameover){
        if(boxtext.innerHTML ===''){
            boxtext.innerHTML=turn;
            turn=changeTurn();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerHTML="Turn for ' "+turn+" '";
            }
        }
    }
    })

})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element =>{
        element.innerHTML=""
    });
    turn ="X"
    isgameover=false;
    document.getElementsByClassName("info")[0].innerHTML="Turn for ' "+turn+" '";
})