// set event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Login Button Clicked");

    // get the phone number
    const phoneNumber = document.getElementById("phone-number").value;

    const pinNumber = document.getElementById('pin-number').value
    console.log(phoneNumber, pinNumber);

    // bad way to validate
    if(phoneNumber === '5' && pinNumber === '1234'){
       alert('Successfully Logged In');
        window.location.href = './home.html'
    }else{
        alert('incorrect number or pin');
    }
  });
