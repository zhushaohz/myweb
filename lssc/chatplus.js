window.onload = function(){
    var TalkWords = document.getElementById("talkwords");
    var TalkSub = document.getElementById("talksub");
    
    
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
var goEasy = new GoEasy({
    host:'hangzhou.goeasy.io',//应用所在的区域地址，杭州：hangzhou.goeasy.io，新加坡：singapore.goeasy.io
    appkey: "BC-7be8689790394e9399f9c8d7ead6eaac",//替换为您的应用appkey
    forceTLS:false, //如果需要使用HTTPS/WSS，请设置为true，默认为false
    onConnected: function() {
        console.log('连接成功！')
    },
    onDisconnected: function() {
        console.log('连接断开！')
    },
    onConnectFailed: function(error) {
        console.log('连接失败或错误！')
    }
});
goEasy.subscribe({
    channel: "my_channel",//替换为您自己的channel
    onMessage: function (message) {
        console.log("Channel:" + message.channel + " content:" + message.content);
        document.getElementById("rtext").innerText = message.content;
    }
});
function send(){
    goEasy.publish({
    channel: "my_channel", //替换为您自己的channel
    message: "Hello, GoEasy!" //替换为您想要发送的消息内容
    });
}
