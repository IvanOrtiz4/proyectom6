
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


$query = $link->prepare("SELECT * FROM Producto");
$query-> execute();
$query->bind_result($nombre_producto, $descripcion, $precio, $dimension, $peso, $id_producto, $fecha, $imagen, $cliente, $categoria, $id_imagen, $id_imagen1, $lat, $lon);
$result = $query->get_result();

$products = array();
foreach($result as $product) {
    array_push($products, $product);
}

echo json_encode(array('products'=> $products));

?>
