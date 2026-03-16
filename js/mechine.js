function getUserInput(id) {
  const input = document.getElementById(id);
  return input;
}

function getAddBalance() {
  const balance = getUserInput("balance");
  const ammountToAdd = getUserInput("amountAdd");
  const newBalance = Number(balance.innerText) + Number(ammountToAdd.value);
  return newBalance;
}

function ammountToAdd(){
    const ammout = getUserInput("amountAdd");
    return ammout.value;
}
function setAddMoney(newBalance){
    const balance = getUserInput("balance");
    balance.innerText = newBalance;
}

function getAccNo(){
    const accNo = getUserInput("account-number");
    return accNo.value;
}

function getCashOutBalance(){
    const balance = getUserInput("balance");
    const ammountToCashOut = getUserInput("amount");
    const newBalance = Number(balance.innerText) - Number(ammountToCashOut.value);
    return newBalance;
}

function setCashOutMoney(newBalance){
    const balance = getUserInput("balance");
    balance.innerText = newBalance;
}

function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cash-out");
  const transactionHistory = document.getElementById("transaction-history");
  console.log(`Add Money - ${addMoney} Cash Out - ${cashOut}`);

  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  transactionHistory.classList.add("hidden");

  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
