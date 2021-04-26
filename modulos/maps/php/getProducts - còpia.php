<?php

$category = $_POST["category"];
$orderBy = $_POST["orderBy"];

// Acces a la base de dades en base als parametres del POST
// TODO

// Construccio de una variable products on tornar el resultat d'accedir a la base de dades
$products = array(
    array("name" => "Robot de cuina", 
    "price" => 200, 
    "shortDescription" => "MAGEFESA 02RO4540000 - Robot de Cocina Modelo MAGCHEF White Plus MGF4540, Multicolor",
    "img" => "http://localhost/ajax_json2/img/robotCocina.jpg",
    "lat" => 41.40292001953483,
    "lng" => 2.205419960527422
    ),
    array("name" => "Mascaretes", 
    "price" => 10, 
    "shortDescription" => "Mascarilla FFP2 blanca FFP2 CE 2797 Mascarilla de Protección Personal.5 capas. Extra Alta Eficiencia Filtración, Caja 30 Uds, En acuerdo con el estándar de la UE EN 149: 2001 A1: 2009",
    "img" => "http://localhost/ajax_json2/img/mascarilla.jpg",
    "lat" => 41.41033152157158,
    "lng" => 2.215624395673756
    ),
    array("name" => "Esterilla", 
    "price" => 20, 
    "shortDescription" => "Esterilla Puzzle para Suelos de Gimnasio y Fitness | Set de Protección de Goma Espuma, Alfombrilla Protectora Expandible de 18 Losas + Bordes | Colchonetas para Máquinas de Deporte, Fácil de Limpia",
    "img" => "http://localhost/ajax_json2/img/esterillaPuzle.jpg"
    "lat" => 41.38423956587912,
    "lng" => 2.121033367618392
    )
);

$jsondata["success"] = true;
//$jsondata["category"] = $category;
//$jsondata["orderBy"] = $orderBy;
$jsondata["products"] = $products;

echo json_encode($jsondata);
?>