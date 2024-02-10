<?php
    $servidor = 'localhost';
    $BD = 'bdlibrary';
    $usuario = 'root';
    $password = '';


    $conectar = new PDO("mysql: server= $servidor; dbname=$BD", $usuario, $password );

    // try {
    //     $conectar = new PDO("mysql: server=$servidor;dbname=$BD", $usuario, $password);
    //     echo "Conectado";
    // } catch (PDOException $e) {
    //     echo "Error: " . $e->getMessage();
    // }

   