<?php
include 'includes/header.php';
// Constructor
class Empleado {
    public $nombre;
    public $apellido;
    public $departamento;
    public $email;
    public $codigo;

    public function __construct($nombre, $apellido, $departamento, $email, $codigo) {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->departamento = $departamento;
        $this->email = $email;
        $this->codigo = $codigo;
    }
}

$empleado = new Empleado('Amilcar', 'Rodriguez', 'Sistemas', 'aar.velasquez@gmail.com', "20172500133");

echo "<pre>";
var_dump($empleado);
echo "</pre>";
echo "<br>";