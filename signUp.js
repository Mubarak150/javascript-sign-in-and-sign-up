document.addEventListener('DOMContentLoaded', function() {
  
  
  // var password = $("#password").val(); 
  // var confirmPassword = $("#confirm-password").val();
  // var firstName = document.getElementsByClassName("first-name");
  // var lastName = document.getElementsByClassName("last-name");
  // var fatherName = document.getElementsByClassName("father-name");
  // var cnic =  $("#cnic").val();
  // var contact =  $("#contact").val();
  // var email = ""; // $("#emailAddr").val(); 
 
  var firstBool = false; 
  document.getElementById("first-name").addEventListener("input", function() {
    firstBool = validateName (this.value, this, this.nextElementSibling);
  })

  var lastBool = false; 
  document.getElementById("last-name").addEventListener("input", function() {
    lastBool = validateName (this.value, this, this.nextElementSibling);
  })

  var fatherBool = false; 
  document.getElementById("father-name").addEventListener("input", function() {
    fatherBool = validateName (this.value, this, this.nextElementSibling);
  })

  var mailBool = false; 
  document.getElementById("emailAddr").addEventListener("input", function(){
    mail = this.value;
    mailBool = validateEmail(mail);
    })

  var cnicBool = false; 
  document.getElementById("cnic").addEventListener("input", function(){
    cnic = this.value;
    cnicBool = validateCNIC(cnic);
    })

  var contactBool = false; 
  document.getElementById("contact").addEventListener("input", function(){
    contact = this.value;
    contactBool = validateContact(contact);
    })

  var passwordBool = false; 
  document.getElementById("password").addEventListener("input", function(){
    password = this.value;
    box  = this;
    alert = box.nextElementSibling;
    passwordBool = lengthPassword (password, box, alert);
    })

  var confirmPasswordBool = false; 
  document.getElementById("confirm-password").addEventListener("input", function(){
    confirmPassword = this.value;
    box  = this;
    alert = box.nextElementSibling;
    confirmPasswordBool = matchPassword (confirmPassword, box, alert);
    // pdatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC)
  })


   // Event for Sign-In CLICK:
successNote = document.getElementById("h1").nextElementSibling;
document.getElementById("sign-up").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Check if both boolMail and boolPass are true
  if(passwordBool && confirmPasswordBool && mailBool && cnicBool && contactBool && firstBool && lastBool && fatherBool) {
    
    successNote.innerHTML= "you are successfully signed in";
    successNote.style.border = "1px solid white";
    successNote.style.padding = "3px";
    successNote.style.backgroundColor = "#10B981"

    // Add a delay before reloading the page
    setTimeout(function() {
      location.reload(); // Reload the page
    }, 1000); // 1000 milliseconds = 1 seconds
  }

  else {
    successNote.innerHTML= "please fill credentials as prescribed!";
    successNote.style.border = "1px solid white";
    successNote.style.padding = "3px";
    successNote.style.backgroundColor = "red"
  }
});



/////////////////////////////////////////////////////// functions //
function lengthPassword(password, box, alert) {

  if (password === "") {
    alert.innerHTML = "* this field is mandatory.";
    box.style.border = "4px double red";
    return false;
  } else if (password.length < 6) {
      alert.innerHTML ="Password must be at least 6 characters.";
      box.style.border = "4px double red";
      return false;
  } else if (password.length > 10) {
      alert.innerHTML ="Password cannot be longer than 10 characters.";
      box.style.border = "4px double red";
      return false;
  } else if (password.length >= 6 && password.length <= 10) {
    alert.innerHTML = "";
    box.style.border = "4px double green";
    return true;
  }
}
/////////////////////////////////////////////////////////////////////////
function matchPassword(confirmPassword, box, alert) {
  if (confirmPassword === "") {
    alert.innerHTML = "* this field is mandatory.";
    box.style.border =  "4px double red";
    return false;
  }
  else if (password !== confirmPassword) {
      alert.innerHTML = "Passwords do not match.";
      box.style.border =  "4px double red";
      return false;
  }
  else {
    box.style.border =  "4px double green";
    alert.innerHTML = "";
    return true;
  } 
}
////////////////////////////////////////////////

function validateEmail(inputText) {

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.match(mailformat)) {

    document.getElementById("emailAddr").style.border = "4px double green";
    document.getElementById("emailAddr").nextElementSibling.innerHTML = "";
    return true;
  }

  else {
    document.getElementById("emailAddr").style.border = "4px double red";
    document.getElementById("emailAddr").nextElementSibling.innerHTML = "* You have entered an invalid email address!";
    return false;
  }
}

////////////////////////////////////////////////////

function validateCNIC(inputNum) {
  var cnicFormat = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
  if(inputNum.match(cnicFormat)) {

    document.getElementById("cnic").style.border = "4px double green";
    document.getElementById("cnic").nextElementSibling.innerHTML = "";
    return true;
  }

  else {
    document.getElementById("cnic").style.border = "4px double red";
    document.getElementById("cnic").nextElementSibling.innerHTML = "* You have entered an invalid CNIC number!";
    return false;
  }
}
////////////////////////////////

function validateContact(inputContact) {
  var contactFormat = /^[0][3][0-9]{9}$/;
  if(inputContact.match(contactFormat)) {

    document.getElementById("contact").style.border = "4px double green";
    document.getElementById("contact").nextElementSibling.innerHTML = "";
    return true;
  }

  else {
    document.getElementById("contact").style.border = "4px double red";
    document.getElementById("contact").nextElementSibling.innerHTML = "* You have entered an invalid Contact Number!";
    return false;
  }
}
////////////////////////////////

function validateName(name, box, alert) {
  if (name.trim() === "") {
    alert.innerHTML = "* This field is mandatory.";
    box.style.border = "3px double red";
    return false;
  } else if (name.length < 4) {
    alert.innerHTML = "* The name is too short.";
    box.style.border = "3px double yellow";
    return false;
  } else {
    var containsSpace = false;
    for (var i = 0; i < name.length; i++) {
      if (name[i] === " ") {
        containsSpace = true;
      }
    }
    if (containsSpace) {
      alert.innerHTML = "* No spaces allowed.";
      box.style.border = "3px double red";
      return false;
    } else {
      alert.innerHTML = "";
      box.style.border = "3px double green";
      return true;
    }
  }
}

  /////////////checking sign in ///
  // disabling sign up button if 
  function updatesignUpButton(firstName, lastName, fatherName, cnic, contact, email, password, confirmPassword, matchPassword, lengthPassword, validateEmail, validateContact, validateCNIC) {
    // var isMatchPasswordValid = matchPassword();
    // var isLengthPasswordValid = lengthPassword();
    // var isValidateEmailValid = validateEmail();

    // console.log('matchPassword return:', isMatchPasswordValid);
    // console.log('lengthPassword return:', isLengthPasswordValid);
    // console.log('validateEmail return:', isValidateEmailValid);

    if (firstName === "" || lastName === "" || fatherName === "" || cnic === "" || contact === "" || email === "" || password === "" || confirmPassword === "" || !matchPassword() || !lengthPassword() || !validateEmail() || !validateContact() || !validateCNIC() ) {
      $("#sign-up").prop('disabled', true);
      $("#sign-up").css("backgroundColor", "red");
      $("#sign-up").css("color", "white");
      $("#sign-up").css("opacity", "0.5");
    } else {
      $("#sign-up").prop('disabled', false);
      $("#sign-up").css("backgroundColor", "green");
      $("#sign-up").css("color", "white");
      console.log("entered else");
      $("#sign-up").css("opacity", "1");
    }
  }
  
  




});