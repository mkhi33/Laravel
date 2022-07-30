<?php
include 'includes/header.php';

// Herencia
class Persona {

    protected $nombre;
    protected $apellido;
    protected $email;
    protected $telefono;

    public function __construct(string $nombre, string $apellido, string $email, string $telefono) {
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->email = $email;
        $this->telefono = $telefono;
    }
    public function mostarInformacion() {
        echo "Nombre:" . $this->nombre . "<br>";
        echo "Apellido:" . $this->apellido . "<br>";
        echo "Email:" . $this->email . "<br>";
        echo "Telefono:" . $this->telefono . "<br>";
    }

    // getters y setters
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
    public function getEmail() {
        return $this->email;
    }
    public function setEmail($email) {
        $this->email = $email;
    }
    public function getTelefono() {
        return $this->telefono;
    }
    public function setTelefono($telefono) {
        $this->telefono = $telefono;
    }

}

class Empleado extends Persona {

    protected $departamento;    
    protected $codigo;

    public function __construct(string $nombre, string $apellido, string $email, string $telefono,  string $departamento, string $codigo) {
        parent::__construct($nombre, $apellido, $email, $telefono);
        $this->departamento = $departamento;
        $this->codigo = $codigo;
    }
    // getters y setters
    public function getDepartamento() {
        return $this->departamento;
    }
    public function setDepartamento($departamento) {
        $this->departamento = $departamento;
    }
    public function getCodigo() {
        return $this->codigo;
    }
    public function setCodigo($codigo) {
        $this->codigo = $codigo;
    }

}

class Proveedor extends Persona {
    protected $empresa;
    public function __construct(string $nombre, string $apellido, string $email, string $telefono, string $empresa) {
        parent::__construct($nombre, $apellido, $email, $telefono);
        $this->empresa = $empresa;
    }

    // crear los getters y setters
    public function getEmpresa() {
        return $this->empresa;
    }
    public function setEmpresa($empresa) {
        $this->empresa = $empresa;
    }

}



$empleado = new Empleado("Amilcar", "Rodriguez",  "aar.velasques@gmail.com", "95047947", "Sistemas", "20172500133");
$proveedor = new Proveedor("Juan", "Perez", "juan@gmail.com", "99999999", "Google");

$proveedor->mostarInformacion();
echo "<br>";
$empleado->mostarInformacion();
echo "<br>";
echo "<prev>";
var_dump($empleado);
echo "</prev><br>";

echo "<prev>";
var_dump($empleado);
echo "</prev><br>";

echo "<br>";
echo $empleado->getTelefono();