import { card } from "../data/data.js";
// const menuToggle=document.getElementById("menu-toggle");
// const navBar=document.querySelector(".bar");
// menuToggle.onclick=()=>{
//     navBar.classList.toggle("class")
// }
// const closeToggle=document.getElementById("close-toggle");
// closeToggle.onclick=()=>{
//     navBar.classList.remove("class")
// }
// const toggleBtn = document.getElementById("menu-toggle");
// const sidebar = document.getElementById("side-bar");
// const sidebar2= document.getElementById("sidebar");

// toggleBtn.addEventListener("click", () => {
//   if(sidebar.style.display === "block"){
//     sidebar.style.display = "none";
//   }
//   else{
//   sidebar.style.display="block";}
// });

const toggleBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("side-bar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

const signIn=document.getElementById("sign-in");
signIn.onclick=function(){
    window.location.href=`../login/login.html`;
}

// function handleSignInClick(){
//   window.location.href=`login/login.html`;
// }


        const menuCard=document.getElementById("card-container");
        
        card.map((cardItems,index) => {
            const divElement= document.createElement("div");
            divElement.className="menu-card";
             divElement.innerHTML=`
        <div class="card-image">
            <img src=${cardItems.img} />
            </div>
            <div class="channel-logo">
            <img src="${cardItems.logo}" alt="Channel Logo" />
            <div class="video-details">
                <h3>${cardItems.title}</h3>
                <span>${cardItems.channelName}</span>
                <span>${cardItems.views} • ${cardItems.duration}</span>
            </div>
        </div>
             `             
            menuCard.append(divElement);
            divElement.onclick=function(){
            //     window.location.href=`../video/video.html?chanelLogo=${cardItems.logo}&title=${cardItems.title}
            //     &chanelName=${cardItems.channelName}&views=${cardItems.views}&duration=${cardItems.duration}&hashtag=${cardItems.hashtag}&desc=${cardItems.desc}`;
            // 
            window.location.href=`../video/video.html?index=${index}`
            }
        });
 

