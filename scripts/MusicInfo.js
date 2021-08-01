const musics =[
    {'music_name':"Hamgonah",
    'artist' : "Sogand",
    'image' : "../Assets/Temp/hamgonahsogand.jpg",
    'file' : "../Sogand - Hamgonah.mp3",
    'rate' : 0,
    'count' : 0},
    {'music_name':"Tehran",
    'artist' : "Sogand",
    'image' : "../Assets/Temp/tehransogand.jpg",
    'file' : "../Sogand - Hamgonah.mp3",
    'rate' : 0,
    'count' : 0},
    {'music_name':"Hamgonah",
    'artist' : "Sogand",
    'image' : "../Assets/Temp/tehransogand.jpg",
    'file' : "../Sogand - Hamgonah.mp3",
    'rate' : 0,
    'count' : 0}
];
let index = 0;
var audio = new Audio(musics[index].file);
const backimg = document.getElementsByClassName("back__music__img")[index].setAttribute("src",musics[index].image);
const imgicon = document.getElementsByClassName("music__img")[index].setAttribute("src",musics[index].image);
const songname = document.getElementsByClassName("music__name")[index].innerHTML = musics[index].music_name;
const artist = document.getElementsByClassName("singer")[index].innerHTML = musics[index].artist;
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
}
const increase = () =>{
    volBar.setAttribute("value",volBar.value++);
}
volumeBtn[0].addEventListener("click",decrease);
volumeBtn[1].addEventListener("click",increase);
audio.volume = volBar.value/100;


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

/////
const nextSng = document.getElementById("next");
nextSng.addEventListener("click",() => {index++; }) ;
const preSng = document.getElementById("prev");
nextSng.addEventListener("click",() => {index--; }) ;
////
const endTime = document.getElementById("durtime").innerHTML=audio.duration;
console.log(audio.duration);


///
const stars = document.getElementsByClassName("rate")[0].getElementsByClassName("stars");
const colorstars = (num)=>{
    musics[index].count++;
    musics[index].rate = ((num + 1) + (musics[index].rate * musics[index].count))/(musics[index].count + 1);
    console.log(musics[index].rate,musics[index].count);
    for(let i=0 ; i<num + 1 ; i++){
        stars[i].style.filter = " invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)";
    }
    for(let i=num + 1 ; i<stars.length ; i++){
        stars[i].style.filter= "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(0%)";
    }
}
for(let i=0 ; i<stars.length ; i++){
    stars[i].addEventListener("click",() => colorstars(i));
}

