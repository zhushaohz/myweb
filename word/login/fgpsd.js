document.getElementById('alert1').style.display="none";
var find = document.getElementById("find");
var alertbtn = document.getElementById("alertbtn");

alertbtn.onclick = function(){
    document.getElementById('alert1').style.display="none";
}
find.onclick = function(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    if (username=="") {
        document.getElementById('alerttext').innerText="请输入你的用户名";
        document.getElementById('alert1').style.display="";
    } else if (email=="") {
        document.getElementById('alerttext').innerText="请输入你的email";
        document.getElementById('alert1').style.display="";
    } else {
        var senddata = "username=" + username + "&email=" + email;
        console.log("tijiaosuccess"); 
        
        var request = new XMLHttpRequest();
        request.open("POST", "http://zhzzf.xyz/word/login/find.php", true);
        
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(senddata);
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    console.log(request.responseText);
                    if (request.responseText=='邮箱正确') {
                        console.log('密码已发送到您的邮箱');
                        document.getElementById('alerttext').innerText = "密码已发送到您的邮箱";
                        document.getElementById('alert1').style.display = "";
                    } else {
                        document.getElementById('alerttext').innerText = "用户名或email有误";
                        document.getElementById('alert1').style.display = "";
                    }


                } else {
                    alert("发生错误；" + request.status)
                }
            }
        }
    }
}