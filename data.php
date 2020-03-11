<?php
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
 
$r_text = '学习 Python';
$submission_date = '2020-02-08 14:41:33';
 
$sql = "INSERT INTO zhz_tbl ".
        "(r_text, submission_date) ".
        "VALUES ".
        "('$r_text','$submission_date')";
 
 
 
mysqli_select_db( $conn, 'ZHZ' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
  die('无法插入数据: ' . mysqli_error($conn));
}
echo "数据插入成功\n";
mysqli_close($conn);
?>
