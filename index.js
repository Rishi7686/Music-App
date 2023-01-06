console.log("welcome")
// initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName: "Warriyo ", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "DEAF KEV ",filePath: "songs/3.mp3",coverPath: "cover/3.jpg"},
    {songName: "Different Heaven ", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Janji-Heroes", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Rabba ", filePath: "songs/2.mp3", coverPath: "cover/6.jpg"},
    {songName: "Sakhiyaan", filePath: "songs/2.mp3", coverPath: "cover/7.jpg"},
    {songName: "Bhula Dena ", filePath: "songs/2.mp3", coverPath: "cover/8.jpg"},
    {songName: "Tumhari Kasam ", filePath: "songs/2.mp3", coverPath: "cover/9.jpg"},
    {songName: "Na Jaana ", filePath: "songs/4.mp3", coverPath: "cover/10.jpg"},
]
songItem.forEach((element, i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


// audioElement.play();

// Handle play/pause Click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        }
})


// Listen  to event
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    // console.log(progress);
    myprogressbar.value =progress;

})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays =() =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', ((e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src =`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    }))
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})