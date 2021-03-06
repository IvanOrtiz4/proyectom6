<?php
/*
Autor: Ivan y Eloy

Fecha: 22/12/2020

Descripción: Login de la pagina
*/

?>
<html>
<head>
<link rel = "stylesheet" href="../css/estilo.css"/>
<style>
.btn {
  border: 2px solid transparent;
  background: #3498DB;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  width: 250px;
  margin: 0 auto;
}
 
.btn:hover {
  background-color: #2980B9;
}

.login-link {
  font-size: 12px;
  color: #444;
  display: block;
	margin-top: 12px;
}
input {
text-align: center;
background-color: #ECF0F1;
border: 2px solid transparent;
border-radius: 3px;
font-size: 16px;
font-weight: 200;
padding: 10px 0;
width: 250px;
transition: border .5s;
}

input:focus {
border: 2px solid #3498DB;
box-shadow: none;
}
.app-title {
text-align: center ;
color: #777;
}

.login-form {
text-align: center;
}
.control-group {
margin-bottom: 10px;
}

  </style>
</head>
    
<body>
	<div class="login">
			<div class = "header">
		    		WallapopEI
			</div>
	  		<?php include 'menu3.php'; ?>
		<div class="login-screen">
			<div class="app-title">
              		<!--FORMULARIO-->
                 <form action="autenticar2.php" method="post">
                   
                  <img src="../img/logo.png" style="width:104px;height:104px;">
                   
				<h1>Login</h1>
			</div>

			<p> </p>
                        <!-- Formulari per introduir nom i contrasenya i loguearse -->
			<div class="login-form">
				<div class="control-group">
				<input type="text" name="username" class="login-field" value="" placeholder="username" maxlength="10" id="login-name" required>
				<label class="login-field-icon fui-user" for="login-name"></label>
				</div>

				<div class="control-group">
				<input type="password" name="password" class="login-field" value="" placeholder="password" maxlength="8" id="login-pass" required>
				<label class="login-field-icon fui-lock" for="login-pass"></label>
				</div>
         
                    <input type="submit" class="btn btn-primary btn-large btn-block" value="INGRESAR">
				<a class="login-link" href="registro.php">Registrarse</a>
			</div>
			<?php
				 echo "<table border=1 cellspacing=0 cellpading=0 align=center BORDER BGCOLOR=#141318>
			 <p><tr align=center > <td><font color=yellow ><div style=font-size:1.25em color:yellow> NO REGISTRADO</div></td></tr></p>
			      </table>"; 
			?>
			<?php include '../footer.php'; ?>
		</div>
	</div>
</body>
</html>
	