window.onload = function() {
  var loginButton = document.getElementById("login");
  if (loginButton) {
      loginButton.onclick = login;
  }
};


/* Creating a function for validating the registration form inputs*/

function validateRegistrationForm() {
  var password = document.forms["regForm"]["password"].value;
  var confirmPassword = document.forms["regForm"]["passwordConfirm"].value;
  var nameText = document.forms["regForm"]["fname"].value;
  var emailText = document.forms["regForm"]["email"].value;
  var lastNameText = document.forms["regForm"]["lname"].value;

  if (nameText == null || nameText.trim() == "") 
  {
    document.getElementById("fnameInput").style.display = "block";
    document.getElementById("break0").style.display = "none";
  } 
  if (lastNameText == null || lastNameText.trim() == "") 
  {
    document.getElementById("lnameInput").style.display = "block";
    document.getElementById("break1").style.display = "none";
  } 
  if (emailText == null || emailText.trim() == "") 
  {
    document.getElementById("emailInput").style.display = "block";
    document.getElementById("break2").style.display = "none";
  } 
  else if (!emailText.includes("@") || !emailText.includes(".")) 
  {
    document.getElementById("emailInputCheck").style.display = "block";
    document.getElementById("break2").style.display = "none";
  } 
  if (password == null || password.trim() == "") 
  {
    document.getElementById("passwordInput").style.display = "block";
    document.getElementById("break3").style.display = "none";
  } 
  if (confirmPassword == null || confirmPassword.trim() == "") 
  {
    document.getElementById("confirmPasswordInput").style.display = "block";
    document.getElementById("break4").style.display = "none";
  } 
  else if (password.trim() != confirmPassword.trim()) 
  {
    document.getElementById("confirmPasswordCheck").style.display = "block";
    document.getElementById("break4").style.display = "none";
  }
  
}

//Creating an additional function to make the error messages disappear when the user starts to retype their information
function vanishErrorsOnClick()
{
    document.getElementById("fnameInput").style.display = "none";
    document.getElementById("break0").style.display = "block";

    document.getElementById("lnameInput").style.display = "none";
    document.getElementById("break1").style.display = "block";

    document.getElementById("emailInput").style.display = "none";
    document.getElementById("break2").style.display = "block";

    document.getElementById("passwordInput").style.display = "none";
    document.getElementById("break3").style.display = "block";

    document.getElementById("confirmPasswordInput").style.display = "none";
    document.getElementById("break4").style.display = "block";

    document.getElementById("confirmPasswordCheck").style.display = "none";
    document.getElementById("break4").style.display = "block";
 
    document.getElementById("emailInputCheck").style.display = "none";
    document.getElementById("break2").style.display = "block";
}

document.getElementById("submit").onclick = validateRegistrationForm;
document.getElementById("fname").onclick = vanishErrorsOnClick;
document.getElementById("lname").onclick = vanishErrorsOnClick;
document.getElementById("email").onclick = vanishErrorsOnClick;
document.getElementById("password").onclick = vanishErrorsOnClick;
document.getElementById("passwordConfirm").onclick = vanishErrorsOnClick;




function login() {
  var email = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (email == 'teacher' && password == 'testing') {
    window.location.href = 'teacher_view.html';
    return false;
  } else if (email != '' && password != '') {
    window.location.href = 'student_view.html';
    return false;
  }
  else{
    window.location.href = 'login_view.html';
    return false;
  }
}