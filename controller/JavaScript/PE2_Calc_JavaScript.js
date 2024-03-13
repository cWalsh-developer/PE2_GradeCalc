/* Creating a function to validate the registration form inputs*/

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
  else if (!emailText.includes("@") && !emailText.includes(".")) 
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

//logic for the calculator
function calculateL5()
{
var markL5;
var finalL5;

var testMarkL5M1 = document.getElementById("testInputL5M1");
var quizMarkL5M1 = document.getElementById("quizInputL5M1");
var courseworkMarkL5M1 = document.getElementById("courseworkInputL5M1");

var testMarkL5M2 = document.getElementById("testInputL5M2");
var quizMarkL5M2 = document.getElementById("quizInputL5M2");
var courseworkMarkL5M2 = document.getElementById("courseworkInputL5M2");

var testMarkL5M3 = document.getElementById("testInputL5M3");
var quizMarkL5M3 = document.getElementById("quizInputL5M3");
var courseworkMarkL5M3 = document.getElementById("courseworkInputL5M3");

var testMarkL5M4 = document.getElementById("testInputL5M4");
var quizMarkL5M4 = document.getElementById("quizInputL5M4");
var courseworkMarkL5M4 = document.getElementById("courseworkInputL5M4");

var markL5M1 = testMarkL5M1 + quizMarkL5M1 + courseworkMarkL5M1;
var markL5M2 = testMarkL5M2 + quizMarkL5M2 + courseworkMarkL5M2;
var markL5M3 = testMarkL5M3 + quizMarkL5M3 + courseworkMarkL5M3;
var markL5M4 = testMarkL5M4 + quizMarkL5M4 + courseworkMarkL5M4;

if(markL5M1 < markL5M2 && markL5M1 < markL5M3 && markL5M1 < markL5M4) //if the first module has the lowest mark
{
  markL5 = (markL5M1 + 2 * markL5M2 + 2 * markL5M3 + 2 * markL5M4) / 7 //this gets the average, only 20% of this mark goes towards the final grade
}
else if(markL5M2 < markL5M1 && markL5M2 < markL5M3 && markL5M2 < markL5M4) //if the second module has the lowest mark
{
  markL5 = (markL5M2 + 2 * markL5M1 + 2 * markL5M3 + 2 * markL5M4) / 7 //this gets the average, only 20% of this mark goes towards the final grade
}
else if(markL5M3 < markL5M1 && markL5M3 < markL5M2 && markL5M3 < markL5M4) //if the third module has the lowest mark
{
  markL5 = (markL5M3 + 2 * markL5M1 + 2 * markL5M2 + 2 * markL5M4) / 7 //this gets the average, only 20% of this mark goes towards the final grade
}
else if(markL5M4 < markL5M1 && markL5M4 < markL5M2 && markL5M4 < markL5M3) //if the fourth module has the lowest mark
{
  markL5 = (markL5M4 + 2 * markL5M1 + 2 * markL5M2 + 2 * markL5M3) / 7 //this gets the average, only 20% of this mark goes towards the final grade
}

finalL5 = (20 * markL5) / 100;
document.getElementById("").innerHTML = finalL5; //insert the id to replace here 
}

function calculateL6()
{
var markL6;
var finalL6;

var testMarkL6M1 = document.getElementById("testInputL6M1");
var quizMarkL6M1 = document.getElementById("quizInputL6M1");
var courseworkMarkL6M1 = document.getElementById("courseworkInputL6M1");

var testMarkL6M2 = document.getElementById("testInputL6M2");
var quizMarkL6M2 = document.getElementById("quizInputL6M2");
var courseworkMarkL6M2 = document.getElementById("courseworkInputL6M2");

var testMarkL6M3 = document.getElementById("testInputL6M3");
var quizMarkL6M3 = document.getElementById("quizInputL6M3");
var courseworkMarkL6M3 = document.getElementById("courseworkInputL6M3");

var testMarkL6M4 = document.getElementById("testInputL6M4");
var quizMarkL6M4 = document.getElementById("quizInputL6M4");
var courseworkMarkL6M4 = document.getElementById("courseworkInputL6M4");

var markL6M1 = testMarkL6M1 + quizMarkL6M1 + courseworkMarkL6M1;
var markL6M2 = testMarkL6M2 + quizMarkL6M2 + courseworkMarkL6M2;
var markL6M3 = testMarkL6M3 + quizMarkL6M3 + courseworkMarkL6M3;
var markL6M4 = testMarkL6M4 + quizMarkL6M4 + courseworkMarkL6M4;

if(markL6M1 < markL6M2 && markL6M1 < markL6M3 && markL6M1 < markL6M4) //if the first module has the lowest mark
{
  markL6 = (markL6M1 + 2 * markL6M2 + 2 * markL6M3 + 2 * markL6M4) / 7 //this gets the average, only 20% of this mark goes towards the final grade
}
else if(markL6M2 < markL6M1 && markL6M2 < markL6M3 && markL6M2 < markL6M4) //if the second module has the lowest mark
{
  markL6 = (markL6M2 + 2 * markL6M1 + 2 * markL6M3 + 2 * markL6M4) / 7 //this gets the average, only 20% of this mark goes towards the final grade
}
else if(markL6M3 < markL6M1 && markL6M3 < markL6M2 && markL6M3 < markL6M4) //if the third module has the lowest mark
{
  markL6 = (markL6M3 + 2 * markL6M1 + 2 * markL6M2 + 2 * markL6M4) / 7 //this gets the average, only 20% of this mark goes towards the final grade
}
else if(markL6M4 < markL6M1 && markL6M4 < markL6M2 && markL6M4 < markL6M3) //if the fourth module has the lowest mark
{
  markL6 = (markL6M4 + 2 * markL6M1 + 2 * markL6M2 + 2 * markL6M3) / 7 //this gets the average, only 20% of this mark goes towards the final grade
}

finalL6 = (20 * markL6) / 100;
document.getElementById("").innerHTML = finalL6; //insert the id to replace here 
}