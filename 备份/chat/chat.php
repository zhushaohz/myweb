<?php
header("Content-Type:application/json;charset=utf-8");
echo $_POST["who"];
echo $_POST["words"];

$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '702287yf';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('连接错误: ' . mysqli_error($conn));
}
echo '连接成功<br />';

mysqli_query($conn , "set names utf8");
 
$r_name = $_POST["who"];
$r_text = $_POST["words"];
$submission_date = date("Y-m-d H:i:s");
 
$sql = "INSERT INTO chat_tbl ".
        "(r_name, r_text, submission_date) ".
        "VALUES ".
        "('$r_name','$r_text','$submission_date')";
 
 
 
mysqli_select_db( $conn, 'ZHZ' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
  die('无法插入数据: ' . mysqli_error($conn));
}
echo "数据插入成功\n";
mysqli_close($conn);
?>
