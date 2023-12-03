<?php 

include 'conexion.php';

$id = $_GET['id'];

// if (isset($_GET['id'])) {
//   $id = $_GET['id'];
// } else {
//   echo "No se proporcionó un ID válido en la URL.";
//   exit();
// }

$sql = $conectar -> query("SELECT * FROM Libros WHERE id=$id");
$datos = $sql->fetch(PDO::FETCH_ASSOC);


$update = $conectar->prepare("UPDATE libros SET libro = :libro, escritor = :escritor, descripcion = :descripcion WHERE id = :id");
  $update->bindParam(':id', $id);
  $update->bindParam(':libro', $nuevolibro);
  $update->bindParam(':escritor', $nuevoescritor);
  $update->bindParam(':descripcion', $nuevadescripcion);
  $update->execute();

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/bootstrap.css">
</head>
<body class="row vh-100 justify-content-center align-items-center body-edit">
    <section class="col-auto form-container  p-3 border border-4 border-dark rounded-5 bg-info bg-gradient">
        <h1 class="text-center" >Editar formulario</h1>

        <form class="table-hover align-middle p-3 rounded-5 bg-info bg-gradient" action="" method="post">
        <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nombre del libro</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Nombre libro">
       
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Escritor</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="Escritor">

            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Descripcion</label>
              <input type="text" class="form-control description" id="exampleInputEmail1" aria-describedby="emailHelp" name="Descripcion">

            </div>
          
            <button class="btn-12"  type="submit" class="enviar_2 m-5"><span>Enviar</span></button>
            <button class="btn-12"  type="button" class="btn btn-warning" onclick="window.location.href = '../index.php'"><span>Volver</span></button>
          </form>
    </section>
    <script src="../JS/bootstrap.js"></script>
</body>
</html>
