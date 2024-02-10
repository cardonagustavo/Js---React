<?php
    include "PHP/conexion.php";
    $datos = $conectar -> query("SELECT * FROM libros");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Libros Registrados</title>
    <link rel="stylesheet" href="./CSS/bootstrap.css">
    <link rel="stylesheet" href="./CSS/style.css">                             
</head>
<body class="row vh-100 justify-content-center">
    <div class="container p-5 ">
        <h1 id="title" class="text-black text-center align-middle p-3 border border-2 border-dark rounded-5 bg-info bg-gradient">LIBROS REGISTRADOS</h1>
  <table class="table table-secondary table-hover align-middle p-3 border border-2 border-dark rounded-5 bg-info bg-gradient">
  <thead>
    <tr>
      <th scope="col" class="text-center" >ID</th>
      <th scope="col" class="text-center" >LIBRO</th>
      <th scope="col" class="text-center" >ESCRITOR</th>
      <th scope="col" class="text-center" >DESCRIPCION</th>
      <th scope="col" class="text-center" >ACCIONES</th>
      <th scope="col" class="text-center" ></th>
    </tr>
  </thead>
  <tbody>
  <?php foreach($datos as $i){?>
    <tr>
      <th scope="row"><?php echo $i['id']; ?></th>
      <td><?php echo $i['libro']; ?></td>
      <td><?php echo $i['escritor']; ?></td>
      <td><?php echo $i['descripcion']; ?></td>
      <!-- <td><a class="btn btn-dark" href="./PHP/editar.php?id=<?php echo $i['id']; ?>">Editar</a></td> -->
      <td><button class="btn-12" onclick="editarLibro(<?php echo $i['id']; ?>)"><span>Editar</span></button></td>
      <td><button class="btn-12" onclick="eliminarLibro(<?php echo $i['id']; ?>)"><span>Eliminar</span></button></td>
      
    </tr>
    <?php } ?>  

  </tbody>
</table>
       
</div>


    <script src="./JS/bootstrap.js"></script>
    <script src="./JS/actions.js"></script>
</body>
</html>