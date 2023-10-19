<?php
// Establecer la conexión a la base de datos (asegúrate de que esto esté configurado correctamente)
$SERVER = 'localhost';
$username = 'root';
$password = '';
$data_base = 'registro';

$conn = new mysqli($SERVER, $username, $password, $data_base);

if ($conn->connect_error) {
    echo "Error en la conexión: " . $conn->connect_error;
    exit; // Sal del script si hay un error en la conexión.
}

// Obtener los datos del JSON que provienen del cliente
$data = json_decode(file_get_contents('php://input'));
$correo = $data->correo;
$contra = $data->password;

// Consulta SQL para verificar la autenticación del usuario
$obtener = "SELECT usuario, contraseña FROM registros WHERE usuario = '$correo' AND contraseña = '$contra'";

$resultado = $conn->query($obtener);

if ($resultado) {
    if ($resultado->num_rows > 0) {
        while ($row = $resultado->fetch_assoc()) {
            // Procesar los datos aquí (por ejemplo, imprimirlos)
            echo "Usuario: " . $row['usuario'] . ", Contraseña: " . $row['contraseña'] . "<br>";
        }
    } else {
        echo "No se encontraron resultados.";
    }
} else {
    echo "Error en la consulta: " . $conn->error;
}

// $conn->close(); // Cierra la conexión a la base de datos al final del script.
?>

