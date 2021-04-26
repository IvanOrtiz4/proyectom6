<?php 

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'ivan');
define('DB_PASSWORD', 'Rentable-2525');
define('DB_NAME', 'wallapopei');
/*Verificamos que la conexi�n se ha realizado con �xito */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}


$query = $link->prepare("SELECT Categoria FROM Producto");
$query-> execute();
$query->bind_result($category);
$result = $query->get_result();

$categorias = array();
foreach($result as $categoria) {
    array_push($categorias, $categoria);
}
echo json_encode(array('categories'=> $categorias));

?>