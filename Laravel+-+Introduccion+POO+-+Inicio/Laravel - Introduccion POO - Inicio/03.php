<?php
include 'includes/header.php';

// Atributos de la clase
class Empleado {
    public $nombre;
    public $apellido;
    public $departamento;
    public $email;
    public $codigo;
}

$empleado = new Empleado;
$empleado->nombre = 'Amilcar';
$empleado->apellido = 'Rodriguez';
echo "<pre>";
var_dump($empleado);
echo "</pre>";