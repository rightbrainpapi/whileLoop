var isMouseVisible = false;

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








// while(isMouseVisible){
//   // execute move function
//   if (!isMouseVisible){
//     console.log(isMouseVisible);
//     break;
//   }
//   isMouseVisible = false;
// }

// ourWhileLoop()





// This is the click function 
function toggleMouse(){
  // makes mouse visible
  var ourMouseStyle = document.getElementById("ourMouse").style;

  if (ourMouseStyle.display=="none"){
    ourMouseStyle.display="block";
    isMouseVisible = true;
    }
    else {
      ourMouseStyle.display="none";
      isMouseVisible = false;
    }

    isMouseVisible ? elephantRuns() : console.log('there is no mouse');


}
toggleMouse();



function removeMouse(){
  // remove the mouse

}



// while("condition is true"){
//   // Do something
// }






