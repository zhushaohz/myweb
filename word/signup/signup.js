document.getElementById('alert1').style.display="none";
var signup = document.getElementById("signup");
var alertbtn = document.getElementById("alertbtn");
signup.onclick = function(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    
    console.log(email.indexOf("@"));
    if (username=="") {
        document.getElementById('alerttext').innerText="请输入你的用户名";
        document.getElementById('alert1').style.display="";
    } else if (email=="") {
        document.getElementById('alerttext').innerText="请输入你的email";
        document.getElementById('alert1').style.display="";
    } else if (email.indexOf("@")==-1) {
        document.getElementById('alerttext').innerText="请输入正确的email地址";
        document.getElementById('alert1').style.display="";
    } else if (password=="") {
        document.getElementById('alerttext').innerText="请输入你的密码";
        document.getElementById('alert1').style.display="";
    } else if (password!=password2) {
        document.getElementById('alerttext').innerText="您的两次密码输入不同";
        document.getElementById('alert1').style.display="";
    } else {
        console.log("tijiaosuccess"); 
        
        var request = new XMLHttpRequest();
        request.open("POST", "http://zhzzf.xyz/word/signup/signup.php", true);
        var senddata = "username=" + username + "&email=" + email + "&password=" +password;
        console.log(senddata);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(senddata);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    console.log(request.responseText);


                } else {
                    alert("发生错误；" + request.status)
                }
            }
        }
    }
    
}
alertbtn.onclick = function(){
    document.getElementById('alert1').style.display="none";
}