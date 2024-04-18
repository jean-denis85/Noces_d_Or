//let baliseZoneProposition = document.getElementById("zoneProposition");
//console.log(baliseZoneProposition);

const couleur =     "Cliquer ici pour Coloriser";
const noiretblanc = "Cliquer ici pour Noir-Blanc";

function writeMilou () {

    document.getElementById("Louise").innerHTML = "Louise";
}


function writeDenis () {
    
    document.getElementById("Denis").innerHTML = "SuperDenis";
}
function writeJL () {
    
    document.getElementById("jl").innerHTML = "JL";
}
 
function mouseOver(position,nom) {
    let posxy = position.split(',');
    let Xpos = Number(posxy[0]);
    // decaler l'affichage vers le bas 
    let Ypos = Number(posxy[1])+ 1.3*Number(posxy[2]);
    document.getElementById("bulle_identitee").style.color = "blue";
    document.getElementById("bulle_identitee").style.left = Xpos +"px";
    document.getElementById("bulle_identitee").style.top = Ypos +"px";
    document.getElementById("bulle_identitee").textContent =nom ;
    document.getElementById("bulle_identitee").style.visibility = "visible";
  }
  
 function bulle_identitee_invisible() {
    document.getElementById("bulle_identitee").style.visibility = "hidden";
 }


  function mouseOut() {
    document.getElementById("bulle_identitee").style.color = "black";
  }
  
  function toggle_visibility_jpeg_photo() {
    if (document.getElementById("jpeg_photo").style.visibility != "hidden" ) {
        document.getElementById("jpeg_photo").style.visibility = "hidden";
        document.getElementById("color_nb").textContent =noiretblanc ;
    } else {
        document.getElementById("jpeg_photo").style.visibility = "visible"; 
        document.getElementById("color_nb").textContent = couleur ;
    }
    
  };

// const area_1 = document.getElementById("JLE");
// area_1.onmouseover = function() {mouseOver()};
// area_1.onmouseout = function() {mouseOut()};

const Arealist = document.getElementsByTagName("area");
if( Arealist.length > 0 ){
    for (let h = 0; h < Arealist.length; h++) {
        let the_xy = Arealist[h].coords;
        let the_alt = Arealist[h].alt;
        Arealist[h].onmouseover = function() {mouseOver(the_xy, the_alt)};  
        Arealist[h].onmouseout = function() {mouseOut()};  
        // alert(the_xy + " " + the_alt);
    }
}else{
    alert("pas trouvé area"); 
}


//document.getElementById("JLE").onmouseover = function() {mouseOver()};
//document.getElementById("JLE").onmouseout = function() {mouseOut()};


