function check() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pw").value;

    if(email == "abc@gmail.com" && password == "sankey" ) {
        window.location.assign("/sankey.html");
    } else if(email != "abc@gmail.com") {
        console.log("inside else if block");
        document.getElementById("invalid").innerHTML = "Invalid username/email";
    }else{
        document.getElementById("invalid").innerHTML = "Invalid password";
    }

}