var isMouseVisible = false;

// This function moves the elephant
function elephantRuns() {
  // change the still elephant to gif
  var elem = document.getElementById("myElephant");   
  var posL = elem.style.left;
  var posR = elem.style.right;
  var id = setInterval(frame, 10);
  function frame() {

    if (posL == 225) {
      clearInterval(id);
      console.log("cleared")
    } else {
      posL++; 
      elem.style.left = posL + 'px';
      // console.log(posR);
      console.log(posL);

      //elem.style.bottom = pos + 'px'; 
    }
  
  }
}



// This is the click function 
function toggleMouse(){
  // makes mouse visible
  var ourMouseStyle = document.getElementById("ourMouse").style;

  // If else Statement to controll whether mouse is in Sancuary
  if (ourMouseStyle.display=="none"){

    // we want the moving 
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







