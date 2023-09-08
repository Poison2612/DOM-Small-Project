var button =document.querySelector("button");

var statos = document.querySelector("h5");
var flag =0;

button.addEventListener("click", function(){
    if(flag == 0){
        statos.innerHTML="Friend";
        statos.style.color="green";
        button.innerHTML="Remove Friend";
        button.style.backgroundColor="#fff"
        button.style.color="black"
        flag=1;

    }
    else{
        statos.innerHTML="Stranger";
        statos.style.color="Red";
        button.innerHTML="Add Friend";
        button.style.backgroundColor="#000"
        button.style.color="white"
        flag=0;

    }
  
});