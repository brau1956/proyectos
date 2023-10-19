
<?php

$SERVER = 'localhost';
$username = 'root';
$password = '';
$data_base = 'registro';

$conn = new mysqli($SERVER, $username, $password, $data_base);
 if($conn == false){
    echo "Error en la conexion";
    }

$dat = json_decode(file_get_contents('php://input'));
// var_dump($dat);

$correo = $dat->correo;
print_r($correo);
$contra = $dat->password;
print_r($contra);
$confi = $dat->confirm_password;
print_r($confi);

$sql = "INSERT INTO registros(usuario,contraseña,confirmar_contraseña) values ('$correo','$contra','$confi')";
if($conn->query($sql)){
    echo "los datos se insertaron con exito";
}else{
    echo "los dastos no se insertaron :( {$conn->error}";
}

/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["registro"];

    $sql = "INSERT INTO tabla (registros) VALUES ('$nombre')";

    if ($conn->query($sql) === TRUE) {
        echo "Datos ingresados correctamente en la base de datos.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
*/
  

?>
