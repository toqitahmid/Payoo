document.getElementById("withdraw-btn")
.addEventListener("click", function(){

    // get agent number 
    const agentNumber = getUserInput("agent-number");
    if(agentNumber.value.length == 11){
        // get balance 
        const balance = getBalance();

        // set newBalance;
        const newBalance = getCashOutBalance();
        
        // get pin number 
        const pin = getUserInput("cashOut-pin-number");
        
        if(newBalance < 0){
            alert("Invalid amount");
            return;
        }
        else if(newBalance > balance){
            alert("Insufficient Money")
        }
        
        if(pin.value === "1234"){
            setCashOutMoney(newBalance);
            alert("Cashout successfull");
        }
        else{
            alert("Pin Invalid");
            return;
        }
    }
    else{
        alert("Invalid agent Number");
    }
    })