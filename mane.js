var img = document.querySelector("img");
img.onclick = function() {
  alert("LET ME OUT WUT DID I DOOOOOOOO AHHHHHHHHH!!!!!");
  if(img.getAttribute("src") === "prisonboi.png") {
    img.setAttribute("src","angryjail.png");
  }
  else {
    img.setAttribute("src","prisonboi.png");
  }
}
document.querySelector("button").onclick = function() {
  var name = prompt("ENTrE YuOr UuseR nAme:");
  var password = prompt("ENTRE ThE PAASsWOrd:");
  alert("HAhAH WeE DonT HavE AcCOuNTs, " + name + ", BuT NoW wEe Noe YOuer passWWoRD Iz " + password + "buTT IST  WuS NT SAVEd");
}
