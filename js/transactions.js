document.getElementById("addMoney-btn")
    .addEventListener('click', function(){

        const createDiv = document.createElement("div");
        const balance = ammountToAdd();
        const accNo = getAccNo();
        const now = new Date();

        createDiv.innerHTML = 
        `
        <div class = "histry-card p-5 bg-blue-200 mt-5 rounded-md"> 
        You have received ${balance} from
        ${accNo} at ${now}
        </div>
        `;     

        const pareantDiv = document.getElementById("transaction-cards");
        pareantDiv.appendChild(createDiv);
    })