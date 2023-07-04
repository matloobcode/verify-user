function VerifyUser(){
   var verifyUser = document.getElementById("UserName").value;
   var userMsg = document.getElementById("UserMsg");
   if(verifyUser.length < 4){
      userMsg.innerHTML = "Name too Short".fontcolor("red").bold().italics();
      userMsg.style.backgroundColor = "yellow";
      userMsg.style.width = "25%";
      userMsg.style.fontSize = "25px";
   }else{
      userMsg.innerHTML = "Verify User".fontcolor("green").bold();
      userMsg.style.backgroundColor = "gray";
      userMsg.style.width = "25%";
      userMsg.style.fontSize = "25px";
   
   }
}
function BlockCase(){
var blockLetter = document.getElementById("UserName").value;
document.getElementById("UserName").value = blockLetter.toUpperCase();
}