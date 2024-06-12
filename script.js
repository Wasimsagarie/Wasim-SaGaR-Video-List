let allVideos = [
    {
       name: "View Garam Chashma",
       src: "./media/Computer Monitor Shape - Using Html and CSS",
       id: "vid_1"
    },
    {
       name: "Imtiaz Ahmad Asir",
       src: "./media/khOwar nEw 2023 sOng poet syeed sadi singer imTiaz Ahmad asir(360P)",
       id: "vid_2"
    },
    {
       name: "Hazrat U Din Wafa",
       src: "./media/khowar new song hazrat u din wafa",
       id: "vid_3"
    },
    {
       name: "Imtiaz Ahmad Asir",
       src: "./media/Imtiaz Asir song 2024(360P)",
       id: "vid_4"
    },
    {
       name: "khowar SonG",
       src: "./media/Heart touching old chitrali song __ Voice _ Rehmat hussain  __ Shandur tube(360P)",
       id: "vid_5"
    },
    {
       name: "iMTIAZ AHAMD ASIR NEW KHOWAR SONG",
       src: "./media/khowar 2024 new song imtiaz asir  poet akbar ali(720P_HD)",
       id: "vid_6"
    },
    {
       name: "Wajaht Karim Athir",
       src: "./media/Yad _e_ Mazi  Wajahat Karim Ather Latest Song 2024  Lyrics Sarfaraz Ali Faraz. (Official Music)",
       id: "vid_7"
    },
    {
       name: "Imtiaz Ahmad Asir Song",
       src: "./media/VOICE IMTIAZ ASIR Editz_wasim saGaR",
       id: "vid_8"
    },
    {
       name: "Sajad Hussain Shad khowar new song 2023",
       src: "./media/Sajad Hussain Shad__ khowar new song 2023 __ lyrics Dust Muhammad Beqarar__ chitrali new song 2023(360P)",
       id: "Vid_9"
    },
    {
       name: "Danish Rashid ",
       src: "./media/Ma Gul Co Chitral __ Danish Rasheed Khowar New Song 2024 __ Chitrali New Song 2024(360P)",
       id: "vid_10"
    },
    {
       name: "How To Make Animated Menu Icon",
       src: "./media/How To Make Animated Menu Icon Using Html",
       id: "vid_11"
    },
    {
       name: "How to make Read More Function",
       src: "./media/How to make Read More Function using Html",
       id: "vid_12"
    },
    {
       name: "Vertical Navigation Bar",
       src: "./media/Vertical Navigation Bar Using Html And CSS",
       id: "vid_13"
    }
 ]
 // let's select all required tags or elements
const mainVideo = document.querySelector('#main-Video');
const musicList = document.querySelector('.music-list');
const playlist = document.getElementById('playlist');
const AllLessons = document.querySelector('.AllLessons');
const videoTitle = document.querySelector('.title');


const ulTag = document.querySelector("ul");
AllLessons.innerHTML = `${allVideos.length} Lessons`


let musicIndex = 1;
window.addEventListener('load',()=>{
   loadMusic(musicIndex);
   playingNow();
})
function playMusic(){
   mainVideo.play();
   playlist.classList.add('active')
}
function loadMusic(indexNumb){
   mainVideo.src = `${allVideos[indexNumb - 1].src}.mp4`;
   videoTitle.innerHTML = `${indexNumb}. ${allVideos[indexNumb - 1].name}`
   
}

for(let i = 0; i < allVideos.length; i++){
   let liTag = `<li li-index="${i + 1}">
      <div class="row">
         <span>${i + 1}. ${allVideos[i].name}</span>
      </div>
      <video class="${allVideos[i].id}" src="${allVideos[i].src}.mp4" style="display: none;" title="${allVideos[i].name}"></video>
      <span id="${allVideos[i].id}" class="duration"></span>
   </li>`;
   playlist.insertAdjacentHTML('beforeend',liTag); 

   let liVideoDuration = ulTag.querySelector(`#${allVideos[i].id}`)
   let liVideoTag = ulTag.querySelector(`.${allVideos[i].id}`);
   

   liVideoTag.addEventListener("loadeddata", ()=>{
      let videoDuration = liVideoTag.duration;
      let totalMin = Math.floor(videoDuration / 60);
      let totalSec = Math.floor(videoDuration % 60);
      // if totalSec is less then 10 then add 0 at the beginging
      totalSec < 10 ? totalSec = "0"+ totalSec : totalSec
      liVideoDuration.innerText = `${totalMin}:${totalSec}`;
      // adding t duration attribe which we'll use below
      liVideoDuration.setAttribute("t-duration", `${totalMin}:${totalSec}`);
   })  
}
// let's work on play particular song on click
const allLiTags = playlist.querySelectorAll('li');
function playingNow(){
   for(let j = 0; j<allVideos.length; j++){
      if(allLiTags[j].classList.contains('playing')){
         allLiTags[j].classList.remove("playing")
      }
      if(allLiTags[j].getAttribute('li-index')==musicIndex){
         allLiTags[j].classList.add('playing')
      }
      // adding onclick attribute in all li tags
      allLiTags[j].setAttribute("onclick", "clicked(this)")
   }
}

function clicked(element){
   // getting li index of particular clicked li tag
   let getIndex = element.getAttribute("li-index");
   musicIndex = getIndex;
   loadMusic(musicIndex);
   playMusic();
   playingNow();
}