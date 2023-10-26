let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let level = 0;
let started = false;

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;

        levelUp();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`

    let btnIdx = Math.floor( Math.random()*4);
    let rdnClr = btns[btnIdx];
    let btn = document.querySelector(`.${rdnClr}`);
    btnFlash(btn);
    
    gameSeq.push(rdnClr);

}

function checkSeq(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length)
        setTimeout(levelUp,500);
    }
    else{
        h3.innerText = `Game Over..! Your Level ${level} \n Press any key to restart the game`;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        resizeTo();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userClr = btn.getAttribute("id");
    userSeq.push(userClr)

    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    level=0;
    started = false;
    gameSeq = [];
    userSeq = [];

}
