var numDrum = document.querySelectorAll(".drum").length;
for (var d = 0; d < numDrum; d++) {
    document.querySelectorAll(".drum")[d].addEventListener("click", function () {
        var drumHtml = this.innerHTML
        switch (drumHtml) {
            case "a":
                var audio = new Audio("Sounds/tom-1.mp3");
                audio.play()
                break;
            case "w":
                var audio = new Audio("Sounds/tom-2.mp3");
                audio.play()
                break;
            case "s":
                var audio = new Audio("Sounds/tom-3.mp3");
                audio.play()
                break;
            case "d":
                var audio = new Audio("Sounds/tom-4.mp3");
                audio.play()
                break;
            case "j":
                var audio = new Audio("Sounds/crash.mp3");
                audio.play()
                break;
            case "k":
                var audio = new Audio("Sounds/kick-bass.mp3");
                audio.play()
                break;
            case "l":
                var audio = new Audio("Sounds/snare.mp3");
                audio.play()
                break;
            default:
        }
    })

}
//var audio = new Audio("Sounds/tom-1.mp3");
//audio.play();