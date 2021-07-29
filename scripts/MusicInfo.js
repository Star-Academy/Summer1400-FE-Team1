var audio = new Audio("../Sogand - Hamgonah.mp3");
let flag = true;
let speaker = document.getElementById("speaker").getElementsByTagName("img")[0];
const changeIcon = () =>{
    if(flag){
        speaker.setAttribute("src", "../Assets/Icons/volume_off_white_24dp.svg");
        flag = false;
        audio.pause();
    }
    else {
        speaker.setAttribute("src", "../Assets/Icons/volume_up_white_24dp.svg");
        flag = true;
        audio.play();
        
    }
}
speaker.addEventListener("click",changeIcon);

////
let volumeBtn = document.getElementsByClassName("volume__container")[0].getElementsByTagName("img");
let volBar = document.getElementById("vol");
const decrease = () =>{
    volBar.setAttribute("value",volBar.value--);
    audio.volume = volBar.getAttribute("value")/100;
}
const increase = () =>{
    volBar.setAttribute("value",volBar.value++);
    audio.volume = volBar.getAttribute("value")/100;
}
volumeBtn[0].addEventListener("click",decrease);
volumeBtn[1].addEventListener("click",increase);

////
const playpause = document.getElementById("playpause").getElementsByTagName("img")[0];
const during = document.getElementById("songduring");
let playFlag = false;
const playOrPause = () =>{
    if(!playFlag){
        playpause.setAttribute("src",'../Assets/Icons/pause_circle_white_24dp.svg');

        playFlag = true;
        audio.play();
        // during.setAttribute("step",);
        while(!playFlag){
        const cur = during.getAttribute("value");
        during.setAttribute("value",cur + audio.duration/100 );
        }
    }
    else {
        playpause.setAttribute("src",'../Assets/Icons/play_circle_filled_white_24dp.svg');
        playFlag = false;
        audio.pause();

    }
}
playpause.addEventListener("click",playOrPause);
