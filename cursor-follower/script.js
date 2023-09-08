var crsr = document.querySelector("#crsr");
var main = document.querySelector('#main');

main,addEventListener("mousemove", function(dets){
    crsr.style.top = dets.y-20 + "px";
    crsr.style.left = dets.x-20 + "px";
    
});