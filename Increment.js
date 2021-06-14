function updateAmount(value){ 
    var num = parseInt(document.getElementById('number').innerHTML);
    if( num >= 0 )
   value=='plus'?num++:num--;
   document.getElementById('number').innerHTML = num;
}

function clickFuntion(){
    var toggle= document.getElementById("formsSection")
    if (toggle.style.display === "block") {
        toggle.style.display = "none";
      } else {
        toggle.style.display = "block";
      }
}