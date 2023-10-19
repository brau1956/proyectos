
<?php

// Verifica si se recibieron datos en la solicitud POST
    // Lee los datos enviados en formato JSON
    $datosJSON = file_get_contents("php://input");
    file_put_contents("to_to_list.json", $datosJSON);

?>
