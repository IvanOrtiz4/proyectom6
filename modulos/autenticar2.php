<!DOCTYPE html>
<html lang="en">
<head>
  <title>Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<!-- jQuery library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!-- Latest compiled JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<?php
// Te recomiendo utilizar esta conección, la que utilizas ya no es la recomendada. 
$link = new PDO('mysql:host=localhost;dbname=wallapopei', 'ivan', 'Rentable-2525'); // el campo vaciío es para la password. 
$usuario = $_POST['username'];
//$usuario = "joel";
$password = $_POST['password'];
?>

<table class="table table-striped">
  	
		<thead>
		<tr>
			<th>ID</th>
			<th>NOMBRE</th>
			<th>APELLIDO</th>
			<th>CLAVE</th>
		</tr>
		</thead>
<?php 
$p = 0;
foreach ($link->query("SELECT clave from usuarios") as $row){ // aca puedes hacer la consulta e iterarla con each. ?> 
<tr>
    <td><?php echo $row['clave'] ?></td>

 </tr>
<?php
	if($password == $row['clave']){
		$p += 1;
	}else{
		$p += 0;
		
	}

	}
if($p == 1){
	header('Location: index2.php');
}else{
	header('Location: login2.php');
}
?>
</table>
</body>
</html>