$(document).ready(function () {
    initAudioEvent();
});

function initAudioEvent(){
    var audio = $('audio')[0];

    //播放暂停
    $('#audioPlayer').click(function(){
        if(audio.paused){
            audio.play();
            $('#audioPlayer').attr('src','stop.png');

        }else{
            audio.pause();
            $('#audioPlayer').attr('src','play.png');
        }
    });
    //document.getElementsByTagName('body')[0].addEventListener('mousedown',mouseDown,false);
    document.getElementById('gecicard').addEventListener('mousedown',mouseDown,false);
    function mouseDown(e){
        var e = e||event;
        console.log(e.button);
        if(e.button==0){
            if(audio.paused){
                audio.play();
                $('#audioPlayer').attr('src','stop.png');
    
            }else{
                audio.pause();
                $('#audioPlayer').attr('src','play.png');
            }
        }
    }
    document.onkeydown = key;
    function key(e) {
        
        var theEvent = e || window.event;
        var code = theEvent.keyCode ||
            theEvent.which || theEvent.charCode;
        console.log(code);
        if (code == 32) {
            e.preventDefault();
            console.log("空格");
            if(audio.paused){
                audio.play();
                $('#audioPlayer').attr('src','stop.png');
    
            }else{
                audio.pause();
                $('#audioPlayer').attr('src','play.png');
            }
        }
        
        return true;

    };




    //获取歌词
    var request2 = new XMLHttpRequest();
    var geci;
    request2.open("POST", "m.php", true);
    var songid = "songid=" + 1355147933;
    console.log(songid);
    request2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request2.send(songid);
    request2.onreadystatechange = function () {

        if (request2.readyState == 4) {

            if (request2.status == 200) {
                console.log(request2.responseText);
                var gecidata = JSON.parse(request2.responseText);
                geci = gecidata.lyric;
                geci = geci.replace(/[\n]/g, "");
                geci = geci.split("[");
                var i = 0;
                for (i = 0; i < geci.length; i++) {
                    geci[i] = geci[i].split("]");
                };

                console.log(geci);

            } else {
                alert("发生错误；" + request2.status)
            }
        }
    };




    //获取音乐时长    
    audio.addEventListener('loadeddata', function () {
        gettime(audio);
    }, false);
    
    //setTimeout("gettime(audio);", 1000);
    
    //同步歌词
    audio.ontimeupdate = function(e) {

        for (i = 0; i < geci.length; i++) {
            if (transTime(audio.currentTime) /*当前播放的时间*/ > geci[i][0]) {
                //显示到页面
                console.log(geci[i][1]);
                if(geci[i].length==1){
                    geci[i][1]="&nbsp;";
                }
                document.getElementById('geci').innerHTML = geci[i][1];
            };
        };
    };




    //更新进度条
    audio.addEventListener('timeupdate', function () {
        updateProgress(audio);
    }, false);


    //播放完进度回到开始位置
    audio.addEventListener('ended', function () {
        audioEnded();
    }, false);

    //点击进度条跳到指定点播放
    $('#progressbarbg').on('mousedown', function (e) {
        //只有音乐开始播放才可以调节，已经播放过但暂停的也可以
        if (!audio.paused || audio.currentTime != 0) {
            var pgswidth = $('.progress-bar-bg').width();
            var rate = e.offsetX / pgswidth;
            audio.currentTime = audio.duration * rate;
            updateProgress(audio);
        }
    })

    //拖动进度条到指定位置播放
    dragProgressDotEvent(audio);

    //静音
    $('#audiomuted').click(function(){
        if(audio.muted==false){
            audio.muted = true;
            $('#audiomuted').attr('src','laba2.png');
    
        }else{
            audio.muted = false;
            $('#audiomuted').attr('src','laba.png');
        }
    });

    //切换播放方式
    var way = 0;
    $('#playway').click(function () {
        if (way == 0) {

            $('#playway').attr('src', 'single-loop.png');
            way = 1;
        } else if (way == 1) {

            $('#playway').attr('src', 'suiji.png');
            way = 2;
        } else {
            $('#playway').attr('src', 'liebiaoxunhuan.png');
            way = 0;
        }
    });

    //切换音乐
    $('#next').click(function () {
        nextmusic();
    });
    function nextmusic() {
        $('#musicid').attr('src', 'Jack1936 - ❣.mp3');
        $('#musicname').html('Jack1936 - ❣');
        console.log(document.getElementById('musicid'));
        
        audio.load();
        $('#audioPlayer').attr('src', 'stop.png');
        audio.play();
    }
    $('#last').click(function () {
        lastmusic();
    });
    function lastmusic() {
        $('#musicid').attr('src', '西奥Sio - Vancci.mp3');
        $('#musicname').html('西奥Sio - Vancci');
        console.log(document.getElementById('musicid'));
        
        audio.load();
        $('#audioPlayer').attr('src', 'stop.png');
        audio.play();
    }

};

function gettime(audio) {
    var totaltime = transTime(audio.duration);
    $('#totaltime').html(totaltime);
};


function updateProgress(audio){
    var value = audio.currentTime / audio.duration;
    $('#progressbar').css('width',value *100+'%');
    $('#progressdot').css('left',value *100+'%');
    $('#audiocurtime').html(transTime(audio.currentTime));
}

function transTime(value){
    var time = "";
    var h = parseInt(value/3600);
    value %=3600;
    var m=parseInt(value/60);
    var s=parseInt(value %60);
    if(h>0){
        time = formatTime(h+":"+m+":"+s);
    } else {
        time = formatTime(m+":"+s);
    }

    return time;
}

function formatTime(value){
    var time ="";
    var s = value.split(':');
    var i = 0;
    for(;i<s.length-1;i++){
        time+=s[i].length==1?("0"+s[i]) : s[i];
        time+= ":";
    }
    time+= s[i].length ==1?("0"+s[i]) : s[i];
    return time;
}

function audioEnded(){
    $('#progressbar').css('width',0);
    $('#progressdot').css('left',0);
    $('#audioPlayer').attr('src','play.png');
    $('#audiocurtime').html(transTime(0));
    $('#geci').html("&nbsp;");
}


function dragProgressDotEvent(audio) {
    var dot = document.getElementById('progressdot');

    var position = {
        oriOffestLeft: 0, // 移动开始时进度条的点距离进度条的偏移值
        oriX: 0, // 移动开始时的x坐标
        maxLeft: 0, // 向左最大可拖动距离
        maxRight: 0 // 向右最大可拖动距离
    };
    var flag = false; // 标记是否拖动开始

    // 鼠标按下时
    dot.addEventListener('mousedown', down, false);
    dot.addEventListener('touchstart', down, false);

    // 开始拖动
    document.addEventListener('mousemove', move, false);
    document.addEventListener('touchmove', move, false);

    // 拖动结束
    document.addEventListener('mouseup', end, false);
    document.addEventListener('touchend', end, false);

    function down(event) {
        if (!audio.paused || audio.currentTime != 0) { // 只有音乐开始播放后才可以调节，已经播放过但暂停了的也可以
            flag = true;

            position.oriOffestLeft = dot.offsetLeft;
            position.oriX = event.touches ? event.touches[0].clientX : event.clientX; // 要同时适配mousedown和touchstart事件
            position.maxLeft = position.oriOffestLeft; // 向左最大可拖动距离
            position.maxRight = document.getElementById('progressbarbg').offsetWidth - position.oriOffestLeft; // 向右最大可拖动距离

            // 禁止默认事件（避免鼠标拖拽进度点的时候选中文字）
            if (event && event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }

            // 禁止事件冒泡
            if (event && event.stopPropagation) {
                event.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
        }
    }

    function move(event) {
        if (flag) {
            var clientX = event.touches ? event.touches[0].clientX : event.clientX; // 要同时适配mousemove和touchmove事件
            var length = clientX - position.oriX;
            if (length > position.maxRight) {
                length = position.maxRight;
            } else if (length < -position.maxLeft) {
                length = -position.maxLeft;
            }
            var pgsWidth = $('.progress-bar-bg').width();
            var rate = (position.oriOffestLeft + length) / pgsWidth;
            audio.currentTime = audio.duration * rate;
            updateProgress(audio);
        }
    }

    function end() {
        flag = false;
    }
}




var request2 = new XMLHttpRequest();
request2.open("POST", "m.php", true);
var songid = "songid="+1407551413;
console.log(songid);
request2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
request2.send(songid);
request2.onreadystatechange = function () {

    if (request2.readyState == 4) {

        if (request2.status == 200) {
            console.log(request2.responseText);
            var gecidata = JSON.parse(request2.responseText);
            var geci = gecidata.lyric;
            geci= geci.replace(/[\n]/g,"");
            geci=geci.split("[");
            var i=0;
            for(i=0;i<geci.length;i++){
                geci[i]=geci[i].split("]");
            };
            
            console.log(geci);
            
        } else {
            alert("发生错误；" + request2.status)
        }
    }
};

