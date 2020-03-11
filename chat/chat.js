var rid;
var rstart;
document.onkeydown=key;
function key(e){
    
    var theEvent = e ||window.event;
    var code = theEvent.keyCode ||
    theEvent.which||theEvent.charCode;
    if(code==13){
        e.preventDefault();
        console.log("回车");
        var TalkWords = document.getElementById("talkwords");
        //定义空字符串
        var str = "";
        if(TalkWords.innerText == ""){
             // 消息为空时弹窗
            alert("消息不能为空");
            return;
        }
        send();
        document.getElementById("talkwords").innerText = "";
    }
    return true;

};

window.onload = function(){
    var Words = document.getElementById("words");
    var Who = document.getElementById("who");
    var TalkWords = document.getElementById("talkwords");
    var TalkSub = document.getElementById("talksub");
    showid();
    
    var t2 = window.setTimeout("show2(rid);",300);

    shownum();
    

    TalkSub.onclick = function(){
        //定义空字符串
        var str = "";
        if(TalkWords.innerText == ""){
             // 消息为空时弹窗
            alert("消息不能为空");
            return;
        }
        send();
        document.getElementById("talkwords").innerText = "";
    }
    //window.scrollTo(0, document.body.scrollHeight)
    //$('#talk_show').prop('scrollTop',document.getElementById("words").scrollHeight);
    
}
function showid(){
    var request4 = new XMLHttpRequest();
    request4.open("GET","http://zhzzf.xyz/chat/rid.php",true); 
    
    request4.setRequestHeader("Content-Type","application/x-www-form-urlencoded");                          
    request4.send();
    request4.onreadystatechange = function() {
        
        if(request4.readyState == 4) {
            
            if(request4.status == 200) {
                console.log(request4.responseText);
                rid=request4.responseText;
            }else {
                alert("发生错误；"+request4.status)
            }
        }
    }
}

function show2(rid){
    
    for (i = 1; i < rid; i++) { 
        show(i);
    }
}
function show(i){
    var request2 = new XMLHttpRequest();
    request2.open("POST","http://zhzzf.xyz/chat/historytext.php",true); 
    var msgid="msgid="+i;
    console.log(msgid);
    request2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");                          
    request2.send(msgid);
    request2.onreadystatechange = function() {
        
        if(request2.readyState == 4) {
            
            if(request2.status == 200) {
                console.log(request2.responseText);
                var msgdata = JSON.parse(request2.responseText);
                //document.getElementById("rname").innerText = msgdata.rname;
                //document.getElementById("rtext").innerText = msgdata.rtext;
                //document.getElementById("rtime").innerText = msgdata.rtime;
                //str = '<div class="atalk"><span>A说 :' + msgdata.rtext +'</span></div>';
                str='<div class="talk"><div class="talkhead small"><span id="rname">'+msgdata.rname+'&nbsp;&nbsp;&nbsp;'+'</span><span id="rtime">'+msgdata.rtime+'</span></div><div class="talkbody"><span id="rtext">'+msgdata.rtext+'</span></div></div>';
                //Words.innerHTML = Words.innerHTML + str;
                document.getElementById("words").innerHTML = document.getElementById("words").innerHTML + str;

                var scrollHeight = $('#words').prop("scrollHeight");
                $('#words').scrollTop(scrollHeight,200);
                //$('#words').animate({scrollTop:scrollHeight}, 100);
            }else {
                alert("发生错误；"+request2.status)
            }
        }
    }
}
//var t1 = window.setInterval("show2();",2000);
var t3 = window.setTimeout("jianting();",3000);
function jianting(){
    
    var t1 = window.setInterval("forjt();",3000);
}
function forjt(){
    rstart = rid;
    var t4 = window.setTimeout("showid();",500);
    var t5 = window.setTimeout("panduan();",1000);
    
}
function panduan(){
    if(rstart!=rid){
        console.log('yes');
        for (i = rstart; i < rid; i++) { 
            show(i);
        } 
    }
}
function send(){
    var request3 = new XMLHttpRequest();
    request3.open("POST","http://zhzzf.xyz/chat/chat.php",true); 
    var senddata="who="+document.getElementById('who').value+"&words="+document.getElementById('talkwords').innerText;
    console.log(senddata);
    request3.setRequestHeader("Content-Type","application/x-www-form-urlencoded");                         
    request3.send(senddata);
    request3.onreadystatechange = function() {
        if(request3.readyState == 4) {
            if(request3.status == 200) {
                console.log(request3.responseText);
                
            
            }else {
                alert("发生错误；"+request3.status)
            }
        }
    }
}


