// function openNav() {
//   document.getElementById("sidebar").style.width = "25vw";
//   // document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("sidebar").style.width = "0";
//   // document.getElementById("main").style.marginLeft= "0";
// }

function openNav() {
if (x.matches) { // If media query matches
    document.getElementById("sidebar").style.width = "100vw";
  } else {
   document.getElementById("sidebar").style.width = "25vw";
  }
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}



var x = window.matchMedia("(max-width: 1024px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes