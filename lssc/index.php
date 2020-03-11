<?php
foreach($_FILES as $file) {
    if(0 == $file['error']) {
        $fileName = iconv('utf-8', 'gb2312', $file['name']);
        $tempFile = $file['tmp_name'];
        move_uploaded_file($tempFile, './upload/'.$fileName);
    }
}
