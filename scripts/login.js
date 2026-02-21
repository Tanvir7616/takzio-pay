console.log('connected')

document.getElementById('login-btn').addEventListener("click", function(){
    // input number 
    const inputNumber = document.getElementById('input-number');
    const number = inputNumber.value;
    console.log(number);

    // input pin 

    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);

    // match number and pin 

    if(number === "01991051850" && pin === "1234"){
        // alert logged in true 

        alert('Login Success');

        window.location.assign("home.html");

    }else{
        // alert log in failed false 

        alert('Login Failed');
        return;
    }
})