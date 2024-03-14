//logic for the calculator
function calculateGrades()
{

//here starts the calculation for level 5/////////////////////////////////////////////////////////////////////////

var markL5;
var finalL5;

var testMarkL5M1 = document.getElementById("testInputL5M1").value;
var quizMarkL5M1 = document.getElementById("quizInputL5M1").value;
var courseworkMarkL5M1 = document.getElementById("courseworkInputL5M1").value;

var testMarkL5M2 = document.getElementById("testInputL5M2").value;
var quizMarkL5M2 = document.getElementById("quizInputL5M2").value;
var courseworkMarkL5M2 = document.getElementById("courseworkInputL5M2").value;

var testMarkL5M3 = document.getElementById("testInputL5M3").value;
var quizMarkL5M3 = document.getElementById("quizInputL5M3").value;
var courseworkMarkL5M3 = document.getElementById("courseworkInputL5M3").value;

var testMarkL5M4 = document.getElementById("testInputL5M4").value;
var quizMarkL5M4 = document.getElementById("quizInputL5M4").value;
var courseworkMarkL5M4 = document.getElementById("courseworkInputL5M4").value;

var markL5M1 = parseInt(testMarkL5M1) + parseInt(quizMarkL5M1) + parseInt(courseworkMarkL5M1);
var markL5M2 = parseInt(testMarkL5M2) + parseInt(quizMarkL5M2) + parseInt(courseworkMarkL5M2);
var markL5M3 = parseInt(testMarkL5M3) + parseInt(quizMarkL5M3) + parseInt(courseworkMarkL5M3);
var markL5M4 = parseInt(testMarkL5M4) + parseInt(quizMarkL5M4) + parseInt(courseworkMarkL5M4);

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
document.getElementById("result5").innerHTML = finalL5.toFixed(2); //insert the id to replace here, to fixed rounds to 2 d.p

//here starts the calculation for level 6/////////////////////////////////////////////////////////////////////////

var markL6;
var finalL6;

var testMarkL6M1 = document.getElementById("testInputL6M1").value;
var quizMarkL6M1 = document.getElementById("quizInputL6M1").value;
var courseworkMarkL6M1 = document.getElementById("courseworkInputL6M1").value;

var testMarkL6M2 = document.getElementById("testInputL6M2").value;
var quizMarkL6M2 = document.getElementById("quizInputL6M2").value;
var courseworkMarkL6M2 = document.getElementById("courseworkInputL6M2").value;

var testMarkL6M3 = document.getElementById("testInputL6M3").value;
var quizMarkL6M3 = document.getElementById("quizInputL6M3").value;
var courseworkMarkL6M3 = document.getElementById("courseworkInputL6M3").value;

var testMarkL6M4 = document.getElementById("testInputL6M4").value;
var quizMarkL6M4 = document.getElementById("quizInputL6M4").value;
var courseworkMarkL6M4 = document.getElementById("courseworkInputL6M4").value;

var markL6M1 = parseInt(testMarkL6M1) + parseInt(quizMarkL6M1) + parseInt(courseworkMarkL6M1);
var markL6M2 = parseInt(testMarkL6M2) + parseInt(quizMarkL6M2) + parseInt(courseworkMarkL6M2);
var markL6M3 = parseInt(testMarkL6M3) + parseInt(quizMarkL6M3) + parseInt(courseworkMarkL6M3);
var markL6M4 = parseInt(testMarkL6M4) + parseInt(quizMarkL6M4) + parseInt(courseworkMarkL6M4);

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

finalL6 = (80 * markL6) / 100;
document.getElementById("result6").innerHTML = finalL6.toFixed(2); //insert the id to replace here, to fixed rounds to 2 d.p

finalAverage = finalL5.toFixed(2) + finalL6.toFixed(2);
document.getElementById("").innerHTML = finalAverage; //to Nicc's discretion replace with id of place where you want the final average to be dispayed :)

//result5 and result6 are 2 paragraphs I added for testing purposes, feel free to modify them to suit your design :)

}
