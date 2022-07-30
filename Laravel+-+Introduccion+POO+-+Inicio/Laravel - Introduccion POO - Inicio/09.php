<?php
include 'includes/header.php';
// getters y setters
class Empleado {

    protected $nombre;
    protected $apellido;
    protected $departamento;
    protected $email;
    protected $codigo;

    public function __construct(string $nombre, string $apellido, string $departamento, string $email, string $codigo) {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->departamento = $departamento;
        $this->email = $email;
        $this->codigo = $codigo;
    }

    public function getNombre() {
        return $this->nombre;
    }
    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }
    public function getApellido() {
        return $this->apellido;
    }
    public function setApellido($apellido) {
        $this->apellido = $apellido;
    }
    public function getDepartamento() {
        return $this->departamento;
    }
    public function setDepartamento($departamento) {
        $this->departamento = $departamento;
    }
    public function getEmail() {
        return $this->email;
    }
    public function setEmail($email) {
        $this->email = $email;
    }
    public function getCodigo() {
        return $this->codigo;
    }
    public function setCodigo($codigo) {
        $this->codigo = $codigo;
    }


}

$empleado = new Empleado('Amilcar', 'Rodriguez', 'Sistemas', 'aar.velasquez@gmail.com', "20172500133");
$nombre = $empleado->getNombre();
echo "<pre>";
var_dump($empleado);
echo $nombre;
echo "</pre>";
echo "<br>";