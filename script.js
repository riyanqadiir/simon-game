let GameSeq=[];
let UserSeq=[];

let start = false;
let lvl = 0;

let p = document.querySelector('p');
let Allbtn = document.querySelectorAll('.neons');
let startbtn=document.querySelector("#btn");
let btns =["red", "green", "blue", "orange"]

startbtn.addEventListener('click',function(){
    if(start==false){
        console.log(`Game Started`) ;
        start=true;
        lvlup();
    }
})

function lvlup(){
    UserSeq=[];
    lvl++;
    p.innerText=`Level ${lvl}`;
    let randindex=Math.floor(Math.random()*4);
    let randcolor= btns[randindex]
    GameSeq.push(randcolor);
    console.log(GameSeq)
    let randbtn = document.querySelector(`.${randcolor}`)
    gameflash(randbtn);
}

function gameflash(a){
    a.classList.add(`gameflash`);
    setTimeout(function(){
        a.classList.remove(`gameflash`);    
    },500)
}
function userflash(a){
    a.classList.add(`userflash`);
    setTimeout(function(){
        a.classList.remove(`userflash`);    
    },250)
}


function checkanswer(index){
    if(UserSeq[index]==GameSeq[index]){
        if(UserSeq.length==GameSeq.length)
        setTimeout(lvlup,1000)
    }
    else{
        p.innerText=`Gameover! Your score is ${lvl-1}`;
        reset();
    }
}

function btnpress(){
    if (start==true){ 
        let btn = this;
        userColor = btn.id;
        UserSeq.push(userColor)
        userflash(btn);
        checkanswer(UserSeq.length-1);
    }
}

for(btn of Allbtn){
    btn.addEventListener('click',btnpress)
}

function reset(){
    UserSeq=[];
    GameSeq=[];
    start=false;
    lvl=0;
}