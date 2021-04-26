<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">


    <link rel = "stylesheet" href="../css/estilo.css"/>
    <link rel="stylesheet" href="css/style.css">


	<title>Registro</title>

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

    <!-- Load Leaflet from CDN -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossorigin=""></script>

    <!-- Load Esri Leaflet from CDN -->
    <script src="https://unpkg.com/esri-leaflet@2.5.3/dist/esri-leaflet.js"
        integrity="sha512-K0Vddb4QdnVOAuPJBHkgrua+/A9Moyv8AQEWi0xndQ+fqbRfAFd47z4A9u1AW/spLO0gEaiE1z98PK1gl5mC5Q=="
        crossorigin=""></script>

    <!-- Geocoding Control -->
    <link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@2.3.3/dist/esri-leaflet-geocoder.css"
        integrity="sha512-IM3Hs+feyi40yZhDH6kV8vQMg4Fh20s9OzInIIAc4nx7aMYMfo+IenRUekoYsHZqGkREUgx0VvlEsgm7nCDW9g=="
        crossorigin="">
    <script src="https://unpkg.com/esri-leaflet-geocoder@2.3.3/dist/esri-leaflet-geocoder.js"
        integrity="sha512-HrFUyCEtIpxZloTgEKKMq4RFYhxjJkCiF5sDxuAokklOeZ68U2NPfh4MFtyIVWlsKtVbK5GD2/JzFyAfvT5ejA=="
        crossorigin=""></script>
   
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="js/functions.js"></script>
   

	<!--<script src="js/functions.js">
	</script>-->
	<style>
		#map {
			width: 600px;
			height: 400px;
		}
	</style>

</head>

<body>
	<div class = "header">
		WallapopEI
	</div>
	<?php include 'menu3.php';?>
		<div class="container pt-5">
		<h4 class="text-center">Registro</h4>
		<div class="row">
			<div class="col-6">
				<form id="form-user-register" method="post"  name="signup-form">
					<div class="form-row mt-5 mb-4">
						<div class="col-6">
							<label for="nom">Nom*</label>
							<input type="text" class="form-control" id="nom" value="" name="nombre">
							<div class="invalid-feedback"></div>
						</div>
		
						<div class="col-6">
							<label for="cognoms">Cognoms*</label>
							<input type="text" class="form-control" id="cognoms" value="" name="cognoms">
							<div class="invalid-feedback"></div>
						</div>		
					</div>

					<div class="form-row mb-4">
						<div class="col-6">
							<label for="DNI">DNI*</label>
							<input type="text" class="form-control" id="dni" value="" name="dni">
							<div class="invalid-feedback"></div>
						</div>
						<div class="col-6">
							<label for="username">Username*</label>
							<div class="input-group">
								<div class="input-group-prepend" id="btnUsername">
									<span class="input-group-text">@</span>
								</div>
								<input type="text" class="form-control" id="username" value="" name="usuario">
								<div class="invalid-feedback"></div>
							</div>
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-6">
							<label for="email">Email*</label>
							<input type="email" class="form-control" id="email" name="email">
							<div class="invalid-feedback"></div>
						</div>
		
						<div class="col-6">
							<label for="telefon">Telèfon*</label>
							<input type="text" class="form-control" id="telefon" name="telefon">
							<div class="invalid-feedback"></div>
						</div>
					</div>

				
	             	<div class="form-row mb-4">
						<div class="col-3">
							<label for="">Via</label>
							<select class="custom-select" id="via" name="via">
								<option value="1">Carrer</option>
								<option value="2">Torrent</option>
								<option value="3">Avinguda</option>
							</select>
						</div>

						<div class="col-7">
							<label for="">Nom</label>
							<input type="text" class="form-control" id="nomCarrer" name="nomCarrer">
						</div>

						<div class="col-2">
							<label for="">Número</label>
							<input type="text" class="form-control" id="numCarrer" name="numCarrer">
						</div>
					</div>

					<div class="form-row mb-4">
						<div class="col-6">
							<label for="">Poblacio</label>
							<input type="text" class="form-control" id="poblacio" name="poblacio">
						</div>
												<div class="col-6">
							<label for="contrasenya">Contrasenya*</label>
							<input type="password" class="form-control" id="contrasenya" name="clave">
							<div class="invalid-feedback"></div>
						</div>
					</div>
					<input type="hidden" name="lat" value="" id="latitude" name="latitude"/>  
					<input type="hidden" name="lng" value="" id="longitude" name="longitude"/> 

	
					<button class="btn btn-primary" onClick = "btnRegistroUser" type="submit">Registrar</button>


				</form>
			</div>
						<div class="col-6 pt-5">
				<div id="map">
					div pel mapa que ens trobarà la latitud i la longitud mitjançant una api de google.
				</div>
				<button type="button" class="btn btn-secondary mt-2" id="findLoc">Buscar adreça</button>  
				<button type="button" class="btn btn-success mt-2" id="addressOk">Guardar</button>  
			</div>	
		

	</div>
</div>
	<br>
	<br>

		<?php include '../footer.php';?>
</body>
</html>
<?php
require_once("config.php");
		      

		$sql="INSERT INTO `usuarios` (`dni`, `usuario`, `cognoms`, `email`, `nombre`, `telefono`, `via`, `nomCarrer`, `numCarrer`, `poblacio`, `clave`, `lat`, `lon`) VALUES ('$_POST[dni]', '$_POST[usuario]', '$_POST[cognoms]', '$_POST[email]', '$_POST[nombre]', '$_POST[telefon]', '$_POST[via]', '$_POST[nomCarrer]', '$_POST[numCarrer]', '$_POST[poblacio]', '$_POST[clave]', '$_POST[lat]', '$_POST[lng]')";

		if (mysqli_query($link, $sql)) {
						 echo "<table border=1 cellspacing=0 cellpading=0 align=center BORDER BGCOLOR=#141318>
			 <p><tr align=center > <td><font color=yellow ><div style=font-size:1.25em color:yellow> USUARIO REGISTRADO </div></td></tr></p>
			      </table>"; 
		} 
		else {		}


		$link->close();

?>
