console.log("connected");

let wrongSubmitCount = 0;

function collectFormData() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("emailErr").innerHTML = "";
  document.getElementById("passErr").innerHTML = "";

  let isValid = true;

  if (!email) {
    document.getElementById("emailErr").innerHTML =
      "Email is required";
    isValid = false;
  } 

   else if (!email.includes("@")) {
    document.getElementById("emailErr").innerHTML =
      "Email must contain @";
    isValid = false;
  }

if (!password) {
    document.getElementById("passErr").innerHTML =
      "Password is required";
    isValid = false;
  } 

  else if (password.length < 6) {
    document.getElementById("passErr").innerHTML =
      "Password must be at least 6 characters";
    isValid = false;
  } 
   if (!password.includes("#")) {
    document.getElementById("passErr").innerHTML =
      "Password must contain #";
    isValid = false;
  }

  if (!isValid) {
    wrongSubmitCount++;
    document.getElementById("wrongCount").innerHTML =
      "Wrong submit count: " + wrongSubmitCount;
  }

  return false;
}

function getEmail() {
  const email = document.getElementById("email").value;
  console.log(email);
}

function getPassword() {
  const password = document.getElementById("password").value;
  console.log(password);
}