var img = document.querySelector("img");
img.onclick = function() {
  alert("LET ME OUT WUT DID I DOOOOOOOO AHHHHHHHHH!!!!!");
  if(img.getAttribute("src") === "file://wffs1/Students/2022/AdamSchultzer/prisonboi.png") {
    img.setAttribute("src","file://wffs1/Students/2022/AdamSchultzer/angryjail.png");
  }
  else {
    img.setAttribute("src","file://wffs1/Students/2022/AdamSchultzer/prisonboi.png");
  }
}
document.querySelector("button").onclick = function() {
  var name = prompt("ENTrE YuOr UuseR nAme:");
  var password = prompt("ENTRE ThE PAASsWOrd:");
  alert("HAhAH WeE DonT HavE AcCOuNTs, " + name + ", BuT NoW wEe Noe YOuer passWWoRD Iz " + password + "buTT IST  WuS NT SAVEd");
}
