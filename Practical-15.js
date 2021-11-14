//console.log("I am connected ...");
let form, username, email, password, rePassword;
form = document.getElementById("form");
username = document.getElementById("userName");
email = document.getElementById("email");
password = document.getElementById("password");
rePassword = document.getElementById("rePassword");

form.addEventListener("change", function (e) {
  // e.preventDefault(e);
  checkValues();

  //alert("Hello Mr"+username.value);
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkValues();
  //location.reload();
  
});

function checkValues() {
  usernameValue = username.value.trim();
  emailValue = email.value.trim();
  passwordValue = password.value.trim();
  rePasswordValue = rePassword.value.trim();
  // console.log(usernameValue);
  // console.log(emailValue);
  // console.log(passwordValue);
  // console.log(rePasswordValue);
  if (usernameValue.length == 0) {
    setError(username, "Username can't be empty");
  } else {
    setSuccess(username);
  }
  if (emailValue.length == 0) {
    setError(email, "Email can't be empty");
  }
  else if(!emailChecker(emailValue))
  {
    setError(email,"Not a valid email")
  } else {
    setSuccess(email);
  }
  if (passwordValue.length == 0) {
    setError(password, "Password can't be empty");
  } else {
    setSuccess(password);
  }
  if (rePasswordValue.length == 0) {
    setError(rePassword, "Please reenter password");
  } else if (passwordValue !== rePasswordValue) {
    setError(rePassword, "Password does not match");
  } else {
    setSuccess(rePassword);
  }
}
function setError(inputElement, message) {
  // alert("Error is called");
  let parent = inputElement.parentElement;

  parent.className = "userContent error";
  console.log(parent);
  let small = parent.querySelector("small");
  small.innerText = message;
}
function setSuccess(inputElement) {
  let parent = inputElement.parentElement;
  parent.className = "userContent success";
  let small = parent.querySelector("small");
  small.innerText = "success";
}

function emailChecker(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}