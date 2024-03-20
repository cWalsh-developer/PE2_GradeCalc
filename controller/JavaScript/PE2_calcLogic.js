window.onload = function() {
  var accessibilityEnabled = sessionStorage.getItem('accessibility');
  if (accessibilityEnabled == 'enabled') {
      document.body.style.fontFamily = 'Comic Sans MS';
      document.body.style.fontSize = '20px';
  }
};




//logic for the calculator
var markL5;
var finalL5;
var markL6;
var finalL6;


function calculateGrades()
{

  //here starts the calculation for level 5/////////////////////////////////////////////////////////////////////////

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

  var markL5M1 = (parseInt(testMarkL5M1) + parseInt(quizMarkL5M1) + parseInt(courseworkMarkL5M1)) / 3;
  var markL5M2 = (parseInt(testMarkL5M2) + parseInt(quizMarkL5M2) + parseInt(courseworkMarkL5M2)) / 3;
  var markL5M3 = (parseInt(testMarkL5M3) + parseInt(quizMarkL5M3) + parseInt(courseworkMarkL5M3)) / 3;
  var markL5M4 = (parseInt(testMarkL5M4) + parseInt(quizMarkL5M4) + parseInt(courseworkMarkL5M4)) / 3;

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

  var markL6M1 = (parseInt(testMarkL6M1) + parseInt(quizMarkL6M1) + parseInt(courseworkMarkL6M1)) / 3;
  var markL6M2 = (parseInt(testMarkL6M2) + parseInt(quizMarkL6M2) + parseInt(courseworkMarkL6M2)) / 3;
  var markL6M3 = (parseInt(testMarkL6M3) + parseInt(quizMarkL6M3) + parseInt(courseworkMarkL6M3)) / 3;
  var markL6M4 = (parseInt(testMarkL6M4) + parseInt(quizMarkL6M4) + parseInt(courseworkMarkL6M4)) / 3;

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

  finalAverage = parseFloat(finalL5.toFixed(2)) + parseFloat(finalL6.toFixed(2)); //to Nicc's discretion replace with id of place where you want the final average to be dispayed :)

  //result5 and result6 are 2 paragraphs I added for testing purposes, feel free to modify them to suit your design :)

  document.getElementById("result5").innerHTML = "Level 5 out of 20% = " + finalL5.toFixed(2) +"%";
  document.getElementById("result6").innerHTML = "Level 6 out of 80% = " + finalL6.toFixed(2) +"%";
  document.getElementById("displayResult").innerHTML = "You got " + finalAverage +"%";

  // Storing data in session storage

  sessionStorage.setItem("markL5", markL5);
  sessionStorage.setItem("finalL5", finalL5);
  sessionStorage.setItem("markL6", markL6);
  sessionStorage.setItem("finalL6", finalL6);

}

function calculatePrediction()
{
    // Retrieving data from session storage
    let markL5 = parseFloat(sessionStorage.getItem("markL5"));
    let finalL5 = parseFloat(sessionStorage.getItem("finalL5"));
    let markL6 = parseFloat(sessionStorage.getItem("markL6"));
    let finalL6 = parseFloat(sessionStorage.getItem("finalL6"));

    //set marks for each class
    var firstClass = 70;
    var secondUpper = 60;
    var secondLower = 50;
    var third = 45;
    var pass = 40;

    //error checking to make sure grades are inputted before prediction can be calculated
    if(finalL5 == null)
    {
      alert("Please make sure you input your grades before asking for a prediction");
    }
    else
    {
      //where magic happens
      var totalAverage = parseFloat(finalL5.toFixed(2)) + parseFloat(finalL6.toFixed(2));

      var firstClassRad = document.getElementById("first_class");
      var upperSecondClassRad = document.getElementById("upper_second_class");
      var lowerSecondClassRad = document.getElementById("lower_second_class");
      var thirdClassRad = document.getElementById("third_class");
      var passRad = document.getElementById("pass");
      //get a reference to each radio button then with ifs check which one is clicked and calculate and display text accordingly

      if (firstClassRad.checked)
      {
        firstPrediction = parseFloat(firstClass) - parseFloat(totalAverage);
 
        if (firstPrediction < 0)
        {
          document.getElementById("predict").innerHTML = "Well Done! First class achieved, you are over by " + Math.abs(firstPrediction.toFixed(2)) + "%";
        }
        else
        {
          L5extra = parseFloat(firstPrediction) / 2 * 10;
          L6extra = parseFloat(firstPrediction) / 8 * 10;
          document.getElementById("predict").innerHTML = "You have not yet achieved a first class, to do so you need an extra " + firstPrediction.toFixed(2) + "%" +
                                                        " this would mean an extra " + L5extra.toFixed(2) + "% in level 5 or an extra " + L6extra.toFixed(2) + "% in level 6";
        }
        
      }
      else if(upperSecondClassRad.checked)
      {
        upperSecondPrediction = parseFloat(secondUpper) - parseFloat(totalAverage);

        if (upperSecondPrediction < 0)
        {
          document.getElementById("predict").innerHTML = "Well Done! Upper second class achieved, you are over by " + Math.abs(upperSecondPrediction.toFixed(2)) + "%";
        }
        else
        {
          L5extra = parseFloat(upperSecondPrediction) / 2 * 10;
          L6extra = parseFloat(upperSecondPrediction) / 8 * 10;
          document.getElementById("predict").innerHTML = "You have not yet achieved an upper second class, to do so you need an extra " + upperSecondPrediction.toFixed(2) + "%" +
                                                        " this would mean an extra " + L5extra.toFixed(2) + "% in level 5 or an extra " + L6extra.toFixed(2) + "% in level 6";
        }
      }
      else if(lowerSecondClassRad.checked)
      {
        lowerSecondPrediction = parseFloat(secondLower) - parseFloat(totalAverage);

        if (lowerSecondPrediction < 0)
        {
          document.getElementById("predict").innerHTML = "Well Done! Lower second class achieved, you are over by " + Math.abs(lowerSecondPrediction.toFixed(2)) + "%";
        }
        else
        {
          L5extra = parseFloat(lowerSecondPrediction) / 2 * 10;
          L6extra = parseFloat(lowerSecondPrediction) / 8 * 10;
          document.getElementById("predict").innerHTML = "You have not yet achieved a lower second class, to do so you need an extra " + lowerSecondPrediction.toFixed(2) + "%" +
                                                        " this would mean an extra " + L5extra.toFixed(2) + "% in level 5 or an extra " + L6extra.toFixed(2) + "% in level 6";
        }
      }
      else if(thirdClassRad.checked)
      {
        thirdPrediction = parseFloat(third) - parseFloat(totalAverage);

        if (thirdPrediction < 0)
        {
          document.getElementById("predict").innerHTML = "Well Done! Third class achieved, you are over by " + Math.abs(thirdPrediction.toFixed(2)) + "%";
        }
        else
        {
          L5extra = parseFloat(thirdPrediction) / 2 * 10;
          L6extra = parseFloat(thirdPrediction) / 8 * 10;
          document.getElementById("predict").innerHTML = "You have not yet achieved a third class, to do so you need an extra " + thirdPrediction.toFixed(2) + "%" +
                                                        " this would mean an extra " + L5extra.toFixed(2) + "% in level 5 or an extra " + L6extra.toFixed(2) + "% in level 6";
        }
      }
      else if(passRad.checked)
      {
        passPrediction = parseFloat(pass) - parseFloat(totalAverage);

        if (passPrediction < 0)
        {
          document.getElementById("predict").innerHTML = "Well Done! Pass achieved, you are over by " + Math.abs(passPrediction.toFixed(2)) + "%";
        }
        else
        {
          L5extra = parseFloat(passPrediction) / 2 * 10;
          L6extra = parseFloat(passPrediction) / 8 * 10;
          document.getElementById("predict").innerHTML = "You have not yet achieved a pass, to do so you need an extra " + passPrediction.toFixed(2) + "%" +
                                                        " this would mean an extra " + L5extra.toFixed(2) + "% in level 5 or an extra " + L6extra.toFixed(2) + "% in level 6";
        }
      }
  }    
}
    




function toggleAccessibility() {
  var accessibilityEnabled = sessionStorage.getItem('accessibility');

  if (accessibilityEnabled === 'enabled') {

      document.body.style.fontFamily = ''; 
      document.body.style.fontSize = ''; 

      sessionStorage.removeItem('accessibility');
  } else {
      document.body.style.fontFamily = 'Comic Sans MS';
      document.body.style.fontSize = '18px';

      sessionStorage.setItem('accessibility', 'enabled');
  }
}
