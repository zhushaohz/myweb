<?php
header("Content-Type:application/json;charset=utf-8");
echo $_POST["data"];

$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '702287';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);


mysqli_query($conn , "set names utf8");

$sql = 'DELETE FROM zhz_tbl
        ';
 
mysqli_select_db( $conn, 'ZHZ' );
$retval = mysqli_query( $conn, $sql );

$r_text = $_POST["data"];
$submission_date = date("Y-m-d H:i:s");
 
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
