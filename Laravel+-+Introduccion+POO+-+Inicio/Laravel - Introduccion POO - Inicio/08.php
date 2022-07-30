<?php
include 'includes/header.php';

// Modificadores de acceso
class Empleado {
    // public private protected
    // Public: acceso desde cualquier parte del código
    // protected: acceso desde la misma clase y desde las clases que heredan de ella
    // private: acceso solo desde la misma clase
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


}

$empleado = new Empleado('Amilcar', 'Rodriguez', 'Sistemas', 'aar.velasquez@gmail.com', "20172500133");
$empleado->nombreEmpleado();
echo "<pre>";
var_dump($empleado);
echo "</pre>";
echo "<br>";