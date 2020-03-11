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

function sendMail($to,$title,$content) {
    // 这个PHPMailer 就是之前从 Github上下载下来的那个项目
    require '../phpmail/PHPMailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;
    //使用smtp鉴权方式发送邮件
    $mail->isSMTP();
    //smtp需要鉴权 这个必须是true
    $mail->SMTPAuth = true;
    // qq 邮箱的 smtp服务器地址，这里当然也可以写其他的 smtp服务器地址
    $mail->Host = 'smtp.yeah.net';
    $mail->SMTPSecure = "ssl"; //目前规定必须使用ssl，非ssl的协议已经不支持了
    $mail-> Port = 465; //端口号
    //smtp登录的账号 这里填入字符串格式的qq号即可
    $mail->Username = 'fishword@yeah.net';
    // 这个就是之前得到的授权码，一共16位
    $mail->Password = '702287yf';
    $mail->setFrom('fishword@yeah.net', 'Fishword');
    // $to 为收件人的邮箱地址，如果想一次性发送向多个邮箱地址，则只需要将下面这个方法多次调用即可
    $mail->addAddress($to);
    $mail->CharSet="utf-8"; 
    // 该邮件的主题
    $mail->Subject = $title;
    // 该邮件的正文内容
    $mail->Body = $content;

    // 使用 send() 方法发送邮件
    if(!$mail->send()) {
        return '发送失败: ' . $mail->ErrorInfo;
    } else {
        return "发送成功";
    }
}


mysqli_query($conn , "set names utf8");
 
 
$sql = "SELECT  r_name, r_email,r_password
        
        FROM word_tbl
        WHERE r_name='{$_POST["username"]}' AND r_email='{$_POST["email"]}' ";
 
mysqli_select_db( $conn, 'ZHZ' );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
    die('无法读取数据: ' . mysqli_error($conn));
}

while($row = mysqli_fetch_array($retval, MYSQLI_ASSOC))
{
    
    // 调用发送方法，并在页面上输出发送邮件的状态
    sendMail($row['r_email'],'Fishword - 找回密码','您的密码是：'.$row['r_password']);
    echo '邮箱正确';
}    
mysqli_free_result($retval);
mysqli_close($conn);
?>
