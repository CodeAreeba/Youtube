// const menuToggle=document.getElementById("menu-toggle");
// const navBar=document.querySelector(".bar");
// menuToggle.onclick=()=>{
//     navBar.classList.toggle("class")
// }
// const closeToggle=document.getElementById("close-toggle");
// closeToggle.onclick=()=>{
//     navBar.classList.remove("class")
// }
const toggleBtn = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("side-items-expanded");
});
