<?php
include 'includes/header.php';

// Constructor property promotion
class Empleado {


    public function __construct(
        public $nombre,
        public $apellido,
        public $departamento,
        public $email,
        public $codigo
    ) {

    }
}

$empleado = new Empleado('Amilcar', 'Rodriguez', 'Sistemas', 'aar.velasquez@gmail.com', "20172500133");

echo "<pre>";
var_dump($empleado);
echo "</pre>";
echo "<br>";