let btn1 = document.querySelector("#btn1");
let mode = "light";
let para = document.querySelector("p");
btn1.addEventListener("click", ()=>{
    if(mode==="light"){
    mode = "dark";
    document.body.style.backgroundColor ="black";
    btn1.innerText="Light !";
    para.style.color = "white";
    btn1.style.backgroundColor ="white";
    btn1.style.color ="black";
  
 }
 else{
  mode ="light";
  document.body.style.backgroundColor ="white";
  btn1.innerText="Dark !";
  para.style.color = "black";
  btn1.style.backgroundColor ="black";
  btn1.style.color ="white";

 } 
 console.log(mode) ;
});
