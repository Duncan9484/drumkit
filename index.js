var buttonCounter = document.querySelectorAll(".drum").length;
for(i=0; i<buttonCounter; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        

       var dunClicked = this.innerHTML

       makeSound(dunClicked);
       animateButton(dunClicked);


       
    });

   

}
document.addEventListener("keydown", function(dun){
    makeSound(dun.key);
    animateButton(dun.key);
})

function makeSound(key){
    switch(key){
        case "a":
            var audio = new Audio("crash.mp3");
        audio.play();
        break;
        case "s":
            var audio = new Audio("kick-bass.mp3");
        audio.play();
        break;
        case "d":
            var audio = new Audio("snare.mp3");
        audio.play();
        break;
        case "f":
            var audio = new Audio("tom-1.mp3");
        audio.play();
        break;
        case "j":
            var audio = new Audio("tom-2.mp3");
        audio.play();
        break;
        case "k":
            var audio = new Audio("tom-3.mp3");
        audio.play();
        break;
        case "l":
            var audio = new Audio("tom-4.mp3");
        audio.play();
        break;
        default:


       }
}
function animateButton(wewe){
    var finywa = document.querySelector("."+wewe);
    finywa.classList.add("pressed");
    setTimeout(function(){
        finywa.classList.remove("pressed");
    }, 300);

}


