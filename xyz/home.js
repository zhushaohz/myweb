window.onload=function(){
    var now=Date();
    //document.getElementById('shijian').innerHTML=now.toLocaleString();
    setInterval("document.getElementById('shijian').innerHTML=new Date().toLocaleString();",1000);
}
