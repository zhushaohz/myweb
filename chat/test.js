function checkword(){
    console.log(document.getElementById("talkwords").innerText);
    //var obj = $('#talkwords'),
        //len = obj.val().length;
        //console.log(obj.innerText);
    //$('#num').html(len);    
}
window.onload = function(){
    var TalkWords = document.getElementById("talkwords");
    var TalkSub = document.getElementById("talksub");
    TalkSub.onclick = function(){
        console.log('aaa');
        console.log(document.getElementById("talkwords").innerText);
        var str = "";
        if(TalkWords.innerText == ""){
             // 消息为空时弹窗
            alert("消息不能为空");
            return;
        }
        document.getElementById("talkwords").innerText = "";
        
        
    }
}

document.onkeydown=key;
function key(e){
    
    var theEvent = e ||window.event;
    var code = theEvent.keyCode ||
    theEvent.which||theEvent.charCode;
    if(code==13){
        e.preventDefault();
        console.log("回车");
        
    }
    return true;

};

