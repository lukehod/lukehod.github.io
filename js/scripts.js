/*
 *    startPage() -
 *      helper function that calls other setup functions to run
 *      after load screen fades away
 */
function startPage(){
  vantaConfig();                    // vanta.js start
  typedConfig();                    // typed.js start
  $("#loadScreen").fadeOut("slow"); // fade away load screen
}

/*
 *    listener for page load
 */
window.addEventListener('DOMContentLoaded', startPage);

/*
 *    Navigation Scripts
 */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/*
 *    Vanta.js background animation
 */
function vantaConfig(){
  VANTA.DOTS({
    el: "#mainbg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    showLines: false
  })
}

/*
 *    type.js configuration
 */
 function typedConfig() {
     var options = {
    stringsElement: '#typed-strings',
    typeSpeed: 50,
    backSpeed: 30,
    cursorChar: '_'
  };

  var typed = new Typed('#typed', options);
}
