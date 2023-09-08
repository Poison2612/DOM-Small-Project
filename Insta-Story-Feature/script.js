var arr = [
    {
        dp:"https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
        story: "https://images.unsplash.com/photo-1621784562807-cb450c2f5efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fEZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
        story: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1619785292559-a15caa28bde6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=900&q=60",
        story: "https://images.unsplash.com/photo-1630255733678-cf82ac59eef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2493&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80",
        story: "https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2624&q=80",
        story: "https://images.unsplash.com/photo-1623039497511-ff6a22f2aa86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZlbWFsZSUyMG1vZGVsfGVufDB8fDB8fHwy&auto=format&fit=crop&w=800&q=60"
    }
];


var clutter = "";
arr.forEach(function(elem,idx){

    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
    
});

var storyHolder = document.querySelector("#story-holder");

storyHolder.innerHTML = clutter;

storyHolder.addEventListener("click", function(dets){

    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    console.log(arr[dets.target.id].story)

    setTimeout(function(){
        document.querySelector("#full-screen").style.display ="none"
    },3000);
})

document.querySelector("#full-screen").addEventListener("click", function(){
    document.querySelector("#full-screen").style.display = "none";

})