function eliminarLibro(id) {
    var confirmacion = confirm("¿Estás seguro de que quieres eliminar este elemento?");
    
    if (confirmacion) {
        window.location.href = "./PHP/eliminar.php?id=" + id;
    }
}

function editarLibro(id) {
    var confirmacion = confirm("¿Estás seguro de que quieres editar este elemento?");
    
    if (confirmacion) {
        window.location.href = "./PHP/editar.php?id=" + id;
    }
}


//<td><a class="btn btn-dark" href="./PHP/editar.php?id=<?php echo $i['id']; ?>">Editar</a></td>
