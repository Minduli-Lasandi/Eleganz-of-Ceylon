function validate() {    // Create a function to validate the inputs
  var question8 = document.getElementsByName('q8');
  var errorBlock = document.getElementById('error-block');
  var comments = document.getElementById('commentforms');
  var message = document.getElementById('thank-you');
  var hide5 = document.getElementById('footer');
  var optionSelected = false;

  for (var i = 0; i < question8.length; i++) {   // Checking if the answers in question is selected
      if (question8[i].checked) {
          optionSelected = true;        // Assging a boolean value
          break; // Exit the loop since an option is selected
      }
  }

  if (optionSelected) {            // Displaying and hiding the relevant code blocks depending on the boolean value
      errorBlock.style.display = "none";
      comments.style.display = 'none';
      message.style.display = 'block';
      hide5.style.display = "none";   // Hide the footer when form is successfully submitted
  } else {
      errorBlock.style.display = "block";
      hide5.style.display = "block";
  }
}

  function showreasons(){         // Creating a function to ask the the reasons for the rating  if the rating is below 4
    var question8=document.getElementsByName('q8');
    var showblock=document.getElementById('reasons');
    for(var i=0; i<question8.length;i++){
        if (question8[i].checked && question8[i].value >= 0 && question8[i].value <= 4){         // Checking if the selected answer is below 4
            showblock.style.display="block";    // Displaying the block related to it 
            return
        }
    }
    showblock.style.display="none";     // If the answer is ab0ve 4 the block is hidden
  }


  function showratings() {           // creating a fucntion to show the ratings accordingly
    var showratings = document.getElementById('showratings');
    showratings.style.display = 'block'; 
  }
   
  function hideratings(){  // creating a fucntion to hide the ratings accordingly
    var showratings = document.getElementById('showratings');
    showratings.style.display = 'none'; 
  }


  function showchallenge(){           // creating a fucntion to ask the challenges faced  according to the answer
    var showchallenges=document.getElementById('showchallenges');
    showchallenges.style.display="block";
  }

  function hidechallenge(){        // creating a fucntion to hide the challenges faced  according to the answer
    var hidechallenges= document.getElementById('showchallenges');
    hidechallenges.style.display='none';

  }
  function showOther() {         // creating a fucntion to ask the other options the user got information from according to the answer
    var otherCheckbox = document.querySelector('input[name="q1"][value="other"]');
    var otherElement = document.getElementById('other');

    if (otherCheckbox.checked) {
        otherElement.style.display = 'block';    // If the value other is checked the block is displayed and if not the block is hidden
    } else {
        otherElement.style.display = 'none';
    }
}


  function hide(){            // Creating a function to hide all the blocks when the user selects reset button
    var hide1= document.getElementById('reasons');
    var hide2= document.getElementById('error-block');
    var hide3=document.getElementById('showratings');
    var hide4=document.getElementById('showchallenges');
    var hide6= document.getElementById('other');
    
    hide1.style.display="none";
    hide2.style.display="none";
    hide3.style.display="none";
    hide4.style.display="none";
    hide6.style.display="none";
    
  }
  function okbutton() {          // Creating a function to reset things to normal when the ok button is selected
    var button1 = document.getElementById('commentforms');
    var hidebutton = document.getElementById('thank-you');
    var showfooter = document.getElementById('footer');
    button1.style.display = 'block';
    hidebutton.style.display = 'none';
    showfooter.style.display = 'block'; // Show the footer again
}
 
 