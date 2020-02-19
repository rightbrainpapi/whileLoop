

// This function moves the elephant
function myMove() {
  // change the still elephant to gif
  var elem = document.getElementById("myElephant");   
  var pos = 150;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      //elem.style.bottom = pos + 'px'; 
    }
  }
}


// This is the click function 
function addMouse(){
  // makes mouse visible

}



function removeMouse(){
  // remove the mouse

}



// while("condition is true"){
//   // Do something
// }



while(isMouseVisible){
  // execute move function




}



