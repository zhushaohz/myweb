document.getElementById('alert1').style.display="none";
var login = document.getElementById("login");
var alertbtn = document.getElementById("alertbtn");
login.onclick = function(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username=="") {
        document.getElementById('alerttext').innerText="请输入你的用户名";
        document.getElementById('alert1').style.display="";
    } else if (password=="") {
        document.getElementById('alerttext').innerText="请输入你的密码";
        document.getElementById('alert1').style.display="";
    } else {
        var senddata = "username=" + username + "&password=" + password;
        console.log("tijiaosuccess"); 
        
        var request = new XMLHttpRequest();
        request.open("POST", "http://zhzzf.xyz/word/login/login.php", true);
        
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(senddata);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    console.log(request.responseText);
                    if (request.responseText=='密码正确') {
                        console.log('密码正确');
                        window.location.href='../'
                    } else {
                        document.getElementById('alerttext').innerText = "用户名或密码有误";
                        document.getElementById('alert1').style.display = "";
                    }


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
