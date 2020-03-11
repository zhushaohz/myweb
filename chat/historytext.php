<?php
header("Content-Type:application/json;charset=utf-8");


$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '702287';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);


mysqli_query($conn , "set names utf8");
 
$sql = 'SELECT r_id, r_name, r_text, 
        submission_date
        FROM chat_tbl
        WHERE r_id='.$_POST["msgid"];
 
mysqli_select_db( $conn, 'ZHZ' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('无法读取数据: ' . mysqli_error($conn));
}

while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC))
{
    
    echo '{"rname":"'.$row['r_name'].'","rtext":"'.$row['r_text'].'","rtime":"'.$row['submission_date'].'"}';
}    
mysqli_free_result($retval);
mysqli_close($conn);
?>