function buttonClick(evt) {
  evt.preventDefault(); // This line will prevent any action such as refreshing the page after submitting the form.
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("passwordConfirm").value;
  password = password.trim();
  confirmPassword = confirmPassword.trim();

  var nameText = document.getElementById("name").value;
  var emailText = document.getElementById("email").value;
  nameText = nameText.trim();
  emailText = emailText.trim();

  if(nameText == "Enter your name" || nameText == "")
  {
    alert("Please enter your name")
  }
  else if (emailText == "Enter your email" || emailText == "")
  {
    alert("Please enter an email address");
  }
  else if(emailText.includes("@") && emailText.includes("."))
  {
    if(password == "")
    {
      alert("Please enter a password")
    }
    else if(confirmPassword == "")
    {
      alert("Please confirm password")
    }
    else if (confirmPassword != password) {
      alert("Your passwords do not match");
    }
    else
    {
      window.location.href = "#";
    }
  }
  else
  {
    alert("Please enter a valid email address")
  }
}

function nameFieldClick()
{
  if(document.getElementById("name").value == "Enter your name")
  {
    document.getElementById("name").value = "";
  }
 
}
function emailFieldClick()
{
  if(document.getElementById("email").value == "Enter your email")
  {
    document.getElementById("email").value = "";
  }
}

document.getElementById("name").onclick = nameFieldClick;
document.getElementById("email").onclick = emailFieldClick;
document.getElementById("submit").addEventListener("click", buttonClick);

