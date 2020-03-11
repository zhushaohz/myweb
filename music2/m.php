<?php
header("Content-Type:application/json;charset=utf-8");
$str1 = 'http://music.163.com/api/song/media?id=';
$str2 = $str1.$_POST["songid"];
$opts = array(
    'http'=>array(
        'method'=>"GET",
        'header'=>"User-Agent: Mozilla/5.0（Windows NT 10.0;WOW64)AppleWebKit/537.36(KHTML,like Gecko)Chrome/50.0.2661.102 Safari/537.36",
		
    )
);
$context = stream_context_create($opts);
$file_contents = file_get_contents($str2,false,$context);

echo $file_contents;