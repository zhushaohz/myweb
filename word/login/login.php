<?php
session_start();
header("Content-Type:application/json;charset=utf-8");


$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '702287';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('连接错误: ' . mysqli_error($conn));
}


mysqli_query($conn , "set names utf8");
 
 
$sql = "SELECT  r_name, r_password
        
        FROM word_tbl
        WHERE r_name='{$_POST["username"]}' AND r_password='{$_POST["password"]}' ";
 
mysqli_select_db( $conn, 'ZHZ' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('无法读取数据: ' . mysqli_error($conn));
}

while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC))
{
    
    echo '密码正确';
    $_SESSION['username']=$row['r_name'];
}    
mysqli_free_result($retval);
mysqli_close($conn);
?>
