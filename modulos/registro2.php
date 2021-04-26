<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

	<link rel="stylesheet" href="css/style.css">
	<script src="js/functions.js"></script>
</head>

<body>
	<div class="container pt-5">
		<h4>Formulari de registre d'usuaris</h4>
		<form id="form-user-register" action="userRegister.php" method="post">
			<div class="form-row mt-5 mb-4">
				<div class="col-4">
					<label for="nom">Nom*</label>
					<input type="text" class="form-control" id="nom" value="" name="nom">
					<div class="invalid-feedback"></div>
				</div>

				<div class="col-4">
					<label for="cognoms">Cognoms*</label>
					<input type="text" class="form-control" id="cognoms" value="" name="cognoms">
					<div class="invalid-feedback"></div>
				</div>

				<div class="col-4">
					<label for="DNI">DNI*</label>
					<input type="text" class="form-control" id="dni" value="" name="DNI">
					<div class="invalid-feedback"></div>
				</div>
			</div>
			
			<div class="form-row mb-4">
				<div class="col-4">
					<label for="username">Username*</label>
					<div class="input-group">
						<div class="input-group-prepend" id="btnUsername">
							<span class="input-group-text">@</span>
						</div>
						<input type="text" class="form-control" id="username">
						<div class="invalid-feedback"></div>
					</div>
				</div>

				<div class="col-4">
					<label for="email">Email*</label>
					<input type="email" class="form-control" id="email">
					<div class="invalid-feedback"></div>
				</div>

				<div class="col-4">
					<label for="telefon">Telèfon*</label>
					<input type="text" class="form-control" id="telefon">
					<div class="invalid-feedback"></div>
				</div>
			</div>
			
			<button class="btn btn-primary" type="submit">Registrar</button>
		</form>
	</div>

</body>
</html>