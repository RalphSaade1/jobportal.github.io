
function checkSearch(){
    var search = document.getElementById("search_btn");
    var inputSearch = document.getElementById("staticEmail2");
    if(inputSearch.value==""){
        window.alert("Please specify your search");
    }
}


function jobTypeSearch(){

    var location = document.getElementById('location_1');
    var industry = document.getElementById('industry_1');
    var validation1 = document.getElementById("validation1")

    if(location.value=="" && industry.value=="" ){
        validation1.innerHTML="<p>please enter valid location and industry</p>";
        validation1.style.color='red';
        validation1.style.fontSize='small';

    }
    else if (industry.value==""){
        validation1.innerHTML="<p>please enter valid industry</p>";
        validation1.style.color='red';
        validation1.style.fontSize='small';
    }
    
    else if(location.value=="" ){
        validation1.innerHTML="<p>please enter valid location</p>";
        validation1.style.color='red';
        validation1.style.fontSize='small';
    }

    else{
        validation1.innerHTML="";
        location.value="";
        industry.value="";
    }

}
function validateForm() {
    // Get the value of the input field with id="email"
    var email = document.getElementById("exampleInputEmail1").value;
    // Get the value of the input field with id="password"
    var password = document.getElementById("exampleInputPassword1").value;
    // Regular expression to check if the email is in the correct format
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // Check if the email is empty
    if (email == "") {
      alert("Email field must be filled out");
      return false;
    }
    // Check if the email is in the correct format
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      return false;
    }
    // Check if the password is empty
    if (!password.match(passwordRegex)) {
      alert("Incorrect password");
      return false;
    }
    // Send a request to the server to check the user's credentials
    // If the credentials are correct, return true to submit the form
    // If the credentials are incorrect, display an error message and return false to prevent the form from being submitted
    return true;
  }



  const element = document.getElementById("mybtn");
  element.addEventListener("click", validationForm);
  
  function validationForm(event) {
    event.preventDefault(); // Prevent the default form submission
    var uemail = document.getElementById("inputEmail4");
    var em1 = document.getElementById("em1");

    var upass = document.getElementById("inputPassword4");
    var pass1 = document.getElementById("pass1");
  
    var add = document.getElementById("inputAddress");
    var addr = document.getElementById("add1");
  
    var city = document.getElementById("inputCity");
    var city1 = document.getElementById("city1");
  
    var state = document.getElementById("inputState");
    var state1 = document.getElementById("state1");

    var zip = document.getElementById("inputZip");
    var zip1 = document.getElementById("zip1");

    var isValid = true;
    if(uemail.value === ""){
      em1.innerHTML = "<p>Please enter your email</p>";
      em1.style.color = 'red';
      em1.style.fontSize = 'small';
      isValid = false;
    }
    else{
      em1.innerHTML = "";
    }
    if(upass.value === ""){
      pass1.innerHTML = "<p>Please enter your password</p>";
      pass1.style.color = 'red';
      pass1.style.fontSize = 'small';
      isValid = false;
    }
    else{
      pass1.innerHTML = "";
    }

  
    if (add.value === "") {
      addr.innerHTML = "<p>Please enter your address</p>";
      addr.style.color = 'red';
      addr.style.fontSize = 'small';
      isValid = false;
    } else {
      addr.innerHTML = "";
    }
  
    if (city.value === "") {
      city1.innerHTML = "<p>Please enter your city</p>";
      city1.style.color = 'red';
      city1.style.fontSize = 'small';
      isValid = false;
    } else {
      city1.innerHTML = "";
    }
  
    if (state.value === "") {
      state1.innerHTML = "<p>Please select your state</p>";
      state1.style.color = 'red';
      state1.style.fontSize = 'small';
      isValid = false;
    } 
    else {
      state.innerHTML = "";
    }
   if(zip.value === ""){
zip1.innerHTML = "<p>Please enter your zip code</p>";
zip1.style.color = 'red';
zip1.style.fontSize = 'small';
isValid = false;
   }
   else{
    zip1.innerHTML = "";
   }
    if (isValid) {
      // The form is valid, submit it
      document.getElementById("myForm").submit();
    }
  }
  