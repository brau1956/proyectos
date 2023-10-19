
document.getElementById("registros").addEventListener("submit", function (e) {
 e.preventDefault(); // Evita que se envíe el formulario

  // Obtiene todos los datos del formulario
  var formData = new FormData(document.getElementById("registros"));

  // Crea un objeto vacío para almacenar los datos
  var datos = {};

  // Itera a través de los pares clave-valor en formData y los almacena en el objeto datos
  formData.forEach(function(value, key) {
      datos[key] = value;
  });

  // Convierte los datos a formato JSON
  var datosJSON = JSON.stringify(datos);

  // Imprime el objeto JSON en la consola
  console.log(datosJSON);

  // Para ver los datos en su forma original (pares clave-valor)
  formData.forEach(function(value, key) {
      console.log(key + ": " + value);


   fetch("src/login.php",{
    method:"POST",
    body: JSON.stringify(datos)
   }) 
   .then(response => response.json())
   .then(data => {
       // Manipula y muestra los datos en la página
       mostrarDatos(data);
   })
   .catch(error => {
       console.log("Error:", error);
   });
});

  });
