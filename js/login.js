document.getElementById("login-btn")
    .addEventListener("click", function(){

        const phnNo = document.getElementById("phn-no");
        const phnNoValue = phnNo.value;
        console.log(phnNoValue);

        const passWord = document.getElementById("input-password");
        const passWordNo = passWord.value;
        console.log(passWordNo);

        if(phnNoValue == "01340996627" && passWordNo == "406927"){
            alert("Login Successful");
            window.location.replace("/homepage.html");
        }
        else{
            alert("Login Unsuccessful");
        }
    })