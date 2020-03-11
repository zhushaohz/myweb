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

  <link href="signup.css?v=0005" rel="stylesheet" type="text/css" />
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
              <a class="nav-link" href="../">FishWord</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
          </ul>
          <ul class="nav nav-tabs justify-content-end n2">
            <?php
            if (isset($_SESSION['username'])) {
              echo '<li class="nav-item daohang"><a class="nav-link" href="../user/">' . $_SESSION['username'] . '</a></li>';
            } else {
              echo '<li class="nav-item daohang">
                            <a class="nav-link" href="">Sign up</a>
                        </li>
                        <li class="nav-item daohang">
                            <a class="nav-link" href="../login/">Log in</a>
                        </li>';
            }
            ?>
          </ul>
        </div>
        <div class="t1">
          <span class="t1">Sign up</span>

        </div>
        <div class="t2">
          <span>Already have an account? <a href="../login/">Log in</a></span>
        </div>
        <div class="tb">
          <form>
            <label for="username">Username</label>
            <div class="input-group mb-3 in">
              <input type="text" class="form-control" id="username" name="username">
            </div>
            <label for="email">Email</label>
            <div class="input-group mb-3 in">
              <input type="email" class="form-control" id="email" name="email">
            </div>
            <label for="password">Password</label>
            <div class="input-group mb-3 in">
              <input type="password" class="form-control" id="password" name="password">
            </div>
            <label for="password2">Password confirmation</label>
            <div class="input-group mb-3 in">
              <input type="password" class="form-control" id="password2" name="password">
            </div>
            <button type="button" class="signupbtn" id="signup">Sign up</button>
          </form>
        </div>
        <div class="alert" id="alert1">
          <span id=alerttext></span>
          <br>
          <button id="alertbtn">I Get</button>
        </div>
      </div>
      <div class="col-md-2">

      </div>

    </div>
  </div>
  <script type="text/javascript" src="signup.js"></script>
</body>

</html>