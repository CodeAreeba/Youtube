const signUp=document.getElementById("sign-up");
signUp.onclick=function(){
    window.location.href=`../register/register.html`;
}
function checkLogin(){
    const email=document.getElementById("aemail").value.trim();
    const password=document.getElementById("apassword").value.trim();

    // const user = JSON.parse(localStorage.getItem("currentUserData"));
    // const apassword=localStorage.getItem("password");
    // const aemail=localStorage.getItem("email");

    
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);
    if(user){
        
        alert("User Logged in successfully!")
        localStorage.setItem("profilePic", "../video/assets/profile.jpg");
        localStorage.setItem("username", JSON.stringify(user.username));
        window.location.href=`../home/indexx.html`
    }
    else{
        alert("Invalid Email & Password!")
    }
}