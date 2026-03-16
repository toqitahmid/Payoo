document.getElementById("addMoney-btn")
    .addEventListener("click", function(){

        const bankName = getUserInput("add-money-bank");
        if(bankName.value === "Select bank"){
            alert("Seleact a Bank!");
            return;
        }else{
            
            const accountNumber = getUserInput("account-number");
            if(accountNumber.value.length == 11){

                const pinNumber = getUserInput("addMoney-pin-number");
                if(pinNumber.value == "1234"){

                    const newBalance = getAddBalance();
                    setAddMoney(newBalance);
                    alert("Add Money Successful");
                }
                else{
                    alert("Invalid Pin");
                }
            }
            else{
                alert("Invalid account number!");
                return;
            }
        }

        
    })