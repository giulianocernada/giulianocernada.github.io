function openBio() {
if (x.matches) {
    document.getElementById("bio-sidebar").style.width = "100vw";
  } else {
   document.getElementById("bio-sidebar").style.width = "43vw";
  }
}

function closeBio() {
  document.getElementById("bio-sidebar").style.width = "0";
}



var x = window.matchMedia("(max-width: 1024px)")