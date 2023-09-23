document.addEventListener("DOMContentLoaded", function() {

// Definitions:
  var boolMail = false;
  var boolPass = false;

  var signIn = document.getElementById("sign-in");
  var emailBox = document.getElementById("emailAddr");
  var passwordBox = document.getElementById("password");
  successNote = document.getElementById("h1").nextElementSibling;

  // Event for E-Mail:
  emailBox.addEventListener("input", function(){
    var email = emailBox.value; 
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      boolMail = false;
      if (email === "") {
        emailBox.nextElementSibling.innerHTML = "* this field is mandatory.";
        emailBox.style.border = "4px double red";
        boolMail = false;
      } 
      else if(email.match(mailformat)) {
          emailBox.style.border =  "4px double green";
          emailBox.nextElementSibling.textContent = "";
          boolMail = true;
        }
      
        else {
          emailBox.style.border = "4px double red";
          emailBox.nextElementSibling.innerHTML = ("* You have entered an invalid email address!");
          boolMail = false;
        }
 })

     // Event for Password: 
    passwordBox.addEventListener("input", function(){
    var password = passwordBox.value;
        alert = signIn.nextElementSibling;
        boolPass = false;
        
      if (password === "") {
          alert.innerHTML = "* this field is mandatory.";
          passwordBox.style.border = "4px double red";
          boolPass = false; 
      } 
      else if (password.length < 6) {
          alert.innerHTML = "Password must be at least 6 characters.";
          passwordBox.style.border = "4px double red";
          boolPass = false;
      } 
      else if (password.length > 10) {
          alert.innerHTML = "Password cannot be longer than 10 characters.";
          passwordBox.style.border = "4px double red";
          boolPass = false;
      }
       else if (password.length >= 6 && password.length <= 10) {
          alert.textContent = "";
          passwordBox.style.border = "4px double green";
          boolPass = true;
      }
    })

   // Event for Sign-In CLICK:
signIn.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Check if both boolMail and boolPass are true
  if (boolMail && boolPass) {
    
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
});

