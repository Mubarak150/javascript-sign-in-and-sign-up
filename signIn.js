    var box = ""; 
    var alert = ""; 
    
    var password = document.getElementById("password");
    var email = document.getElementById("emailAddr"); // $("#emailAddr").val(); 
    var signIn = document.getElementById("sign-in");
   updatesignInButton(email, password, lengthPassword, validateEmail )
    

  
    email.addEventListener("input", function(){
      mail = this.value;
      validateEmail(mail);
      updatesignInButton(email, password, lengthPassword, validateEmail )
    })
    
    password.addEventListener("input", function(){
      pass = this.value;
      alert = box.nextElementSibling;
      lengthPassword (pass, password, alert);
      updatesignInButton(email, password, lengthPassword, validateEmail )
    })

  
    signIn.addEventListener("input",function() {
      alert("sign in succeeded")
    })
  
  
  
  /////////////////////////////////////////////////////// functions //
  function lengthPassword(pass, password, alert) {
  
    if (password === "") {
      alert.innerHTML("* this field is mandatory.");
      box.styles.border = "4px double red";
      return false;
    } else if (password.length < 6) {
        alert.text("Password must be at least 6 characters.");
        box.styles.border = "4px double red";
        return false;
    } else if (password.length > 10) {
        alert.text("Password cannot be longer than 10 characters.");
        box.styles.border = "4px double red";
        return false;
    } else if (password.length >= 6 && password.length <= 10) {
      alert.textContent = "";
      box.styles.border = "4px double green";
      return true;
    }
  }

  
  function validateEmail(inputText) {
  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.str.match(mailformat)) {
  
    email.styles.border =  "4px double green";
      email.nextElementSibling.textContent = "";
      return true;
    }
  
    else {
      email.styles.border = "4px double red";
      email.nextElementSibling.innerHTML = ("* You have entered an invalid email address!");
      return false;
    }
  }
  

    /////////////checking sign in ///
    // disabling sign up button if 
    function updatesignInButton(email, password, lengthPassword, validateEmail ) {
      // var isMatchPasswordValid = matchPassword();
      // var isLengthPasswordValid = lengthPassword();
      // var isValidateEmailValid = validateEmail();
  
      // console.log('matchPassword return:', isMatchPasswordValid);
      // console.log('lengthPassword return:', isLengthPasswordValid);
      // console.log('validateEmail return:', isValidateEmailValid);
  
      if (email === "" || password === "" || !lengthPassword() || !validateEmail() ) {
        signIn.disabled = true;
        signIn.styles.backgroundColor = "red";
        signIn.styles.color = "white";
        signIn.styles.opacity = "0.5";
      } else {
        signIn.disabled = false;
        signIn.styles.backgroundColor = "green";
        signIn.styles.color = "white";
        console.log("entered else");
        signIn.styles.opacity = "1";
      }
    }
    
    
  