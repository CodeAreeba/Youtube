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

function handleSignInClick(){
  window.location.href=`login/login.html`;
}
 

