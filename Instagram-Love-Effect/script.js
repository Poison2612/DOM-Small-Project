var box = document.querySelector("#box");

var love = document.querySelector("i");

box.addEventListener('dblclick', function(){
    love.style.transform = 'translate(-50%, -50%) scale(1)';
    love.style.opacity = '0.8'
    console.log("sahil");

    setTimeout(function(){
        love.style.transform ='translate(-50%,-50%) scale(0)';
        
    },500);
    setTimeout(function(){
       love.style.opacity = '0'
    },1000);
});