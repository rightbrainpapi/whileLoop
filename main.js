var isMouseVisible;

// This function moves the elephant
function elephantRuns() {
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
  var ourMouseStyle = document.getElementById("ourMouse").style;

  if (ourMouseStyle.display=="none"){
    ourMouseStyle.display="block";
    isMouseVisible = true;

    }
    else {
      ourMouseStyle.display="none";
    }





 
    

}
addMouse();



function removeMouse(){
  // remove the mouse

}



// while("condition is true"){
//   // Do something
// }



  //  while(isMouseVisible){
  //     // execute move function
  //     if (!isMouseVisible){
  //       console.log(isMouseVisible);
  //       break;
  //     }
  //   }


