window.onload = function(){
    var Words = document.getElementById("words");
    var Who = document.getElementById("who");
    var TalkWords = document.getElementById("talkwords");
    var TalkSub = document.getElementById("talksub");
    
    //for (i = 1; i < 10; i++) { 
    show(1);
    //}

    TalkSub.onclick = function(){
        //定义空字符串
        var str = "";
        if(TalkWords.value == ""){
             // 消息为空时弹窗
            alert("消息不能为空");
            return;
        }
        send();
    }
    
}
function show(i){
    var request2 = new XMLHttpRequest();
    request2.open("POST","https://zhzzf.wang/chat/historytext.php",true); 
    var msgid="msgid="+i;
    console.log(msgid);
    request2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");                          
    request2.send(msgid);
    request2.onreadystatechange = function() {
        console.log('there');
        if(request2.readyState = 4) {
            console.log('here');
            if(request2.status = 200) {
                console.log(request2.responseText);
                var msgdata = JSON.parse(request2.responseText);
                //document.getElementById("rname").innerText = msgdata.rname;
                //document.getElementById("rtext").innerText = msgdata.rtext;
                //document.getElementById("rtime").innerText = msgdata.rtime;
                //str = '<div class="atalk"><span>A说 :' + msgdata.rtext +'</span></div>';
                str='<div class="talk"><div class="talkhead small"><span id="rname">'+msgdata.rname+'</span><span id="rtime">'+msgdata.rtime+'</span></div><div class="talkbody"><span id="rtext">'+msgdata.rtext+'</span></div></div>';
                //Words.innerHTML = Words.innerHTML + str;
                document.getElementById("words").innerHTML = document.getElementById("words").innerHTML + str;
            }else {
                alert("发生错误；"+request2.status)
            }
        }
    }
}
function send(){
    var request3 = new XMLHttpRequest();
    request3.open("POST","https://zhzzf.wang/chat/chat.php",true); 
    var senddata="who="+document.getElementById('who').value+"&words="+document.getElementById('talkwords').value;
    console.log(senddata);
    request3.setRequestHeader("Content-Type","application/x-www-form-urlencoded");                         
    request3.send(senddata);
    request3.onreadystatechange = function() {
        if(request3.readyState = 4) {
            if(request3.status = 200) {
                console.log(request3.responseText);
                
            
            }else {
                alert("发生错误；"+request3.status)
            }
        }
    }
}