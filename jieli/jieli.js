window.onload=function(){
    
    show();
    

}

function show(){
    var request2 = new XMLHttpRequest();
    request2.open("GET","http://zhzzf.xyz/jieli/showdata.php",true); 
                            
    request2.send();
    request2.onreadystatechange = function() {
        if(request2.readyState = 4) {
            if(request2.status = 200) {
                console.log(request2.responseText);
            
                document.getElementById("fuzhi").innerText = request2.responseText;
            
            }else {
                alert("发生错误；"+request2.status)
            }
        }
    }
}
var tijiao = document.getElementById("tijiao");
tijiao.onclick = function(){
    console.log("tijiaosuccess");
    var request = new XMLHttpRequest();
    request.open("POST","http://zhzzf.xyz/jieli/jieli.php",true); 
    var data="data="+document.getElementById('comment').value;
    console.log(data);
    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");                          
    request.send(data);
    request.onreadystatechange = function() {
        if(request.readyState = 4) {
            if(request.status = 200) {
                console.log(request.responseText);
                show();
                
            
            }else {
                alert("发生错误；"+request.status)
            }
        }
    }
}
shangchuan.onclick = function(){
    var ipf = document.getElementById("inputfile").value;
    console.log(ipf);
}