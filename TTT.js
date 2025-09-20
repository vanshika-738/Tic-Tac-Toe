let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msgbox=document.querySelector(".msgbox");
let msg=document.querySelector("#msg");
let turnO = true;
const winpatterns=[
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
 ];

 const resetgame=()=>{
    turnO=true;
    enablebox();
    msgbox.classList.add("hide");
 };

 const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 };

 const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 };

 const showwinner = (winner) => {
    msg.innerText = ` Congratulations, winner is ${winner}`;
    msgbox.classList.remove("hide");
    disablebox();
  };

  const showdraw = () => {
    msg.innerText = "😮 Game Draw!";
    msgbox.classList.remove("hide");
    disablebox();
  }; 

 const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pv1=boxes[pattern[0]].innerText;
        let pv2=boxes[pattern[1]].innerText;
        let pv3=boxes[pattern[2]].innerText;

        if(pv1!="" && pv2!="" && pv3!=""){
            if(pv1==pv2 && pv2==pv3){
                showwinner(pv1);
                return;
            }
        }
    }
    let allFilled = true;
  boxes.forEach((box) => {
    if (box.innerText === "") {
      allFilled = false;
    }
  });

  if (allFilled) {
    showdraw();
  }
};
 

 boxes.forEach((box) =>{
    box.addEventListener("click",()=>{

        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
  
 });

 newbtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);
 

 