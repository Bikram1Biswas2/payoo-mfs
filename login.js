// set event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Login-btn-clicked");

    // get the phone number
    const mobileNum = document.getElementById("phone-number").value;
    console.log(mobileNum);
  });
