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

	<link href="user.css?v=1963" rel="stylesheet" type="text/css" />
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
							echo '<li class="nav-item daohang"><a class="nav-link" href="">' . $_SESSION['username'] . '</a></li>';
						} else {
							echo '<li class="nav-item daohang">
                            <a class="nav-link" href="../signup/">Sign up</a>
                        </li>
                        <li class="nav-item daohang">
                            <a class="nav-link" href="../login/">Log in</a>
                        </li>';
						}
						?>
					</ul>
				</div>
				<div>
					<span>个人设置</span>
				</div>
				<div class="out">
					<a href="logout.php?action=logout" type="btn btn-light" role="button">Log out</a>
				</div>
			</div>
			<div class="col-md-2">

			</div>

		</div>
	</div>
	<script type="text/javascript" src="user.js"></script>
</body>

</html>