<?php
if($_GET['action']=="logout"){
    header('Refresh:1; url="http://zhzzf.xyz/word/login"');
    session_start();
    setcookie("cookiename", NULL);
    session_unset();
    session_destroy();
}