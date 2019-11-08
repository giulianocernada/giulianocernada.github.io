function openNav() {
if (x.matches) {
    document.getElementById("sidebar").style.width = "100vw";
  } else {
   document.getElementById("sidebar").style.width = "25vw";
  }
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}



var x = window.matchMedia("(max-width: 1024px)")
