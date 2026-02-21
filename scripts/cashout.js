
document.getElementById("cashout-btn").addEventListener("click", function(){

    //cashout number input

    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);

    //cashout amount input and show

    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    //cashout pin input and show

    const cashoutPinInput = document.getElementById('cashout-pin');
    const cashoutPin = cashoutPinInput.value;
    console.log(cashoutPin);

    //current balance call

    const currentBalanceInput = document.getElementById("balance");
    const balance = currentBalanceInput.innerText;
    console.log(balance);

    // new amount show

    const newAmount = Number(balance) - Number(cashoutAmount);
    
    console.log(newAmount);

    if(newAmount < 0){
        alert("invalid amount");
        return;
    }

    //pin verify

    if(cashoutPin === "1234"){
        alert("cashout successfull");
        console.log("new balance", newAmount);
        currentBalanceInput.innerText = newAmount;
    }else{
        alert("invalid pin");
        return;
    }


})