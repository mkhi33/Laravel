<?php
include 'includes/header.php';

// Métodos 
class Empleado {
    public $nombre;
    public $apellido;
    public $departamento;
    public $email;
    public $codigo;

    public function __construct(string $nombre, string $apellido, string $departamento, string $email, string $codigo) {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->departamento = $departamento;
        $this->email = $email;
        $this->codigo = $codigo;
    }

    public function nombreEmpleado(){
        echo $this->nombre . " " . $this->apellido;
    }
}

$empleado = new Empleado('Amilcar', 'Rodriguez', 'Sistemas', 'aar.velasquez@gmail.com', "20172500133");
$empleado->nombreEmpleado();
echo "<pre>";
var_dump($empleado);
echo "</pre>";
echo "<br>";