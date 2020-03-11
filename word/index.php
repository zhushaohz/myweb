<?php
session_start();
?>

<html>

<head>
    <title>FishWord</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css">

    <link rel="shortcut icon" href="rain.ico" />

    <link href="word.css?v=1963" rel="stylesheet" type="text/css" />
    <script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>

</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-2">

            </div>
            <div class="col-md-8">
                <div class="t0">
                    <ul class="nav nav-tabs n1">
                        <li class="nav-item">
                            <a class="nav-link" href="">FishWord</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Help</a>
                        </li>
                    </ul>
                    <ul class="nav nav-tabs justify-content-end n2">
                        <?php
                        if(isset($_SESSION['username'])){
                            echo '<li class="nav-item daohang"><a class="nav-link" href="./user/">'.$_SESSION['username'].'</a></li>';
                            
                        } else{
                            echo '<li class="nav-item daohang">
                            <a class="nav-link" href="./signup/">Sign up</a>
                        </li>
                        <li class="nav-item daohang">
                            <a class="nav-link" href="./login/">Log in</a>
                        </li>';
                        }
                        ?>
                        
                    </ul>
                </div>
                <div class="t1">
                    <p>记不住怎么办？</p>
                    <p>来这里背单词！</p>
                </div>

                <div class="tb">
                    <select>
                        <option>select word library</option>
                        <option>考研英语一真题高频词汇</option>
                        <option>考研英语二真题高频词汇</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>

                <div class="start">
                    <a href="./memorize/" type="btn btn-light" role="button">Get Start</a>
                </div>


            </div>
            <div class="col-md-2">

            </div>

        </div>
    </div>
    <script type="text/javascript" src="word.js"></script>
</body>

</html>
