<?php
    include 'conexion.php';

    $libro = $_POST['libro'];
    $escritor = $_POST['escritor'];
    $descripcion = $_POST['descripcion'];

    //$sql = "INSERT INTO libros values (null, '$libro', '$escritor', '$descripcion')";

    $enviar = $conectar -> prepare ("INSERT INTO libros values (null, :libro, :escritor, :descripcion)");
    $enviar -> bindParam('libro', $libro);
    $enviar -> bindParam('escritor', $escritor);
    $enviar -> bindParam('descripcion', $descripcion);
    $enviar -> execute();

    header('Location: ../index.php');

?>


<?php

// include 'conexion.php';

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $libro = $_POST['libro'];
//     $escritor = $_POST['escritor'];
//     $descripcion = $_POST['descripcion'];

//     try {
//         $enviar = $conectar->prepare("INSERT INTO libros (libro, escritor, descripcion) VALUES (:libro, :escritor, :descripcion)");
//         $enviar->bindParam(':libro', $libro);
//         $enviar->bindParam(':escritor', $escritor);
//         $enviar->bindParam(':descripcion', $descripcion);
//         $enviar->execute();

//         header('Location: ../index.php');
//     } catch (PDOException $e) {
//         echo "Error al insertar datos: " . $e->getMessage();
//     }
// } else {
//     echo "Acceso no permitido.";
// }
// ?>
