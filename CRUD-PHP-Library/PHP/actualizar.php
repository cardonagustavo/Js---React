<?php
include 'conexion.php';

$id = $_POST['id'];
$libro = $_POST['libro'];
$escritor = $_POST['escritor'];
$descripcion = $_POST['descripcion'];


try {

    $enviar = $conectar->prepare("UPDATE libros SET libro = :libro, escritor = :escritor, descripcion = :descripcion
     WHERE id = :id");

    $enviar -> (':id', $id);
    $enviar -> (':libro', $libro);
    $enviar -> (':escritor', $escritor);
    $enviar -> (':descripcion', $descripcion);
    $enviar -> execute();

    header('Location: index.php');

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>