function func(){
    var email = document.getElementById("email").value;
    var pass = ducument.getElementById("password").value;
    if(email== 'kundansingzrajput@gmail.com' && pass == '12345678'){
        alert("successfull")
        window.location.assign(index.html)
    }
    else{
        alert("wrong entry invalid")
    }
}