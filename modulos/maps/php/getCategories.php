<?php


// Construccio de una variable categories accedint a la base de dades
$categories = array("hogar", "fitness", "informatica");

$jsondata["success"] = true;
$jsondata["categories"] = $categories;

echo json_encode($jsondata);
?>