
document.getElementById("signUp-btn").addEventListener("click", function (event) {
  event.preventDefault(); // prevent default button behavior if inside a form

  const names = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userData = {
    username: names,
    email: email,
    password: password
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const existUser = users.find(user => user.email === email);
  if (existUser) {
    alert("Email already registered!");
    return;
  }

  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));

  alert("User registered successfully!");

//   // Clear input fields (optional)
//   document.getElementById("name").value = "";
//   document.getElementById("email").value = "";
//   document.getElementById("password").value = "";

//   handleLoginClick(); // switch to login page
 window.location.href=`../login/login.html`
});
const signUp=document.getElementById("logI");
signUp.onclick=function(){
    window.location.href=`../login/login.html`;
}



